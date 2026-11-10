// Pre-build check on the Markdown content: every project and course file needs frontmatter,
// no em dashes in public copy, and no generated concept art as a project hero.
// Usage: npm run check:content
import fs from 'node:fs';

const dirs = ['src/content/projects', 'src/content/coursework'];
const result = [];

for (const dir of dirs) {
  const names = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  for (const name of names) {
    // Git checks files out with CRLF on Windows; compare against LF so the check passes on both.
    const text = fs.readFileSync(`${dir}/${name}`, 'utf8').replaceAll('\r\n', '\n');
    if (!text.startsWith('---\n') || !text.includes('\n---\n')) throw new Error(`${name}: invalid frontmatter`);
    if (text.includes('—')) throw new Error(`${name}: em dash`);
    if (/hero:.*(?:wheel-concept|drone-concept)/.test(text)) throw new Error(`${name}: generated project hero`);
  }
  result.push({ dir, records: names.length });
}

console.log(JSON.stringify(result));
