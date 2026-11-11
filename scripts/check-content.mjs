// Pre-build check on the site copy.
//  - Every project and course file needs frontmatter.
//  - No em dashes anywhere in public copy (content, pages, data, components, layouts).
//  - No generated concept art as a project hero.
//  - Every project page uses the same five sections, in order, and three "At a glance" facts.
//  - Every course has a tier; featured courses use the same four sections.
// Usage: npm run check:content
import fs from 'node:fs';
import path from 'node:path';

// The fixed outline of a project page. Sub-headings inside a section use ###.
const PROJECT_SECTIONS = ['Problem', 'My role', 'What I built', 'Evidence', 'Status'];
// The fixed outline of a featured course page.
const COURSE_SECTIONS = ['The course', 'What I did', 'What I learned', 'Skills and tools'];

const errors = [];
const result = [];

// Git checks files out with CRLF on Windows; compare against LF so the check passes on both.
const read = (file) => fs.readFileSync(file, 'utf8').replaceAll('\r\n', '\n');

for (const dir of ['src/content/projects', 'src/content/coursework']) {
  const names = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  for (const name of names) {
    const text = read(`${dir}/${name}`);
    const end = text.indexOf('\n---\n', 4);
    if (!text.startsWith('---\n') || end < 0) {
      errors.push(`${name}: invalid frontmatter`);
      continue;
    }
    if (/hero:.*(?:wheel-concept|drone-concept)/.test(text)) errors.push(`${name}: generated project hero`);

    if (dir.endsWith('coursework')) {
      const tier = text.slice(0, end).match(/^tier: (\w+)/m)?.[1];
      if (!['featured', 'core', 'foundation'].includes(tier)) errors.push(`${name}: missing or unknown tier`);
      if (tier === 'featured') {
        const sections = [...text.slice(end + 5).matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
        if (sections.join(' | ') !== COURSE_SECTIONS.join(' | ')) {
          errors.push(`${name}: sections are [${sections.join(', ')}], expected [${COURSE_SECTIONS.join(', ')}]`);
        }
      }
    }

    if (dir.endsWith('projects')) {
      const frontmatter = text.slice(0, end);
      const body = text.slice(end + 5);

      const sections = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
      if (sections.join(' | ') !== PROJECT_SECTIONS.join(' | ')) {
        errors.push(`${name}: sections are [${sections.join(', ')}], expected [${PROJECT_SECTIONS.join(', ')}]`);
      }

      // No section may be empty.
      const parts = body.split(/^## .+$/m).slice(1);
      parts.forEach((part, i) => {
        if (!part.trim()) errors.push(`${name}: "${sections[i]}" section is empty`);
      });

      const facts = (frontmatter.match(/^- value:/gm) || []).length;
      if (facts !== 3) errors.push(`${name}: ${facts} "At a glance" facts, expected 3`);
    }
  }
  result.push({ dir, records: names.length });
}

// Em dash scan across everything that ends up as public copy.
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const copyFiles = walk('src').filter((f) => /\.(md|astro|ts)$/.test(f));
for (const file of copyFiles) {
  const lines = read(file).split('\n');
  lines.forEach((line, i) => {
    if (line.includes('—') || line.includes('&mdash;')) errors.push(`${file}:${i + 1}: em dash`);
  });
}
result.push({ emDashScan: copyFiles.length });

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify(result));
