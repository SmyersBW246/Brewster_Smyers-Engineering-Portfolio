import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const [owner, name] = (process.env.GITHUB_REPOSITORY || '').split('/');
const computed = name && name.toLowerCase() !== `${owner}.github.io`.toLowerCase() ? `/${name}` : '/';
const base = (process.env.SITE_BASE || computed).replace(/\/$/, '');
const errors = [];
const files = dir => fs.readdirSync(dir, {withFileTypes: true}).flatMap(e => e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]);
if (!fs.existsSync(root)) throw Error('Run npm run build first.');
const html = files(root).filter(f => f.endsWith('.html'));
const docs = new Map(html.map(f => [f, fs.readFileSync(f, 'utf8')]));
const decode = s => s.replaceAll('&amp;', '&').replaceAll('&#x26;', '&');
let refs = 0, images = 0, math = 0, embeddedStylePages = 0;

function checkReference(raw, from, rel) {
  raw = decode(raw);
  if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(raw)) return;
  const target = new URL(raw, from);
  if (base && !target.pathname.startsWith(`${base}/`) && target.pathname !== base) {
    errors.push(`${rel}: link escapes deployment prefix ${raw}`); return;
  }
  const clean = decodeURIComponent(target.pathname.slice(base.length)).replace(/^\//, '');
  let dest = path.join(root, clean);
  if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) dest = path.join(dest, 'index.html');
  refs++;
  if (!fs.existsSync(dest)) { errors.push(`${rel}: missing ${raw}`); return; }
  if (target.hash && dest.endsWith('.html')) {
    const id = decodeURIComponent(target.hash.slice(1));
    if (!(docs.get(dest) || fs.readFileSync(dest, 'utf8')).includes(`id="${id}"`)) errors.push(`${rel}: missing anchor ${raw}`);
  }
}
function checkCss(body, from, rel) {
  for (const m of body.matchAll(/url\(["']?([^"')]+)["']?\)/g)) checkReference(m[1], from, rel);
}
for (const [file, body] of docs) {
  const rel = path.relative(root, file);
  const route = rel === '404.html' ? '/404.html' : `/${rel.replace(/index\.html$/, '')}`;
  const from = new URL(`${base}${route}`, 'https://local.invalid');
  if ((body.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`${rel}: expected one h1`);
  if (!body.includes('lang="en"')) errors.push(`${rel}: missing page language`);
  if (!body.includes('name="description"')) errors.push(`${rel}: missing description`);
  if (body.includes('katex-error')) errors.push(`${rel}: failed math`);
  if (body.includes('—')) errors.push(`${rel}: em dash in public copy`);
  math += (body.match(/class="katex"/g) || []).length;
  const styles = [...body.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
  // A missing stylesheet produced the reported unstyled site. Every output must carry its layout.
  if (!styles.includes('.site-header') || !styles.includes('.project-grid') || !styles.includes('.story-opening')) errors.push(`${rel}: missing embedded portfolio styles`);
  else embeddedStylePages++;
  if (/<link\b[^>]*rel="stylesheet"/.test(body)) errors.push(`${rel}: unexpected external stylesheet dependency`);
  checkCss(styles, from, rel);
  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    images++;
    if (!/\balt="[^"]+"/.test(m[0])) errors.push(`${rel}: missing nonempty alt`);
    const srcset = m[0].match(/\bsrcset="([^"]+)"/);
    if (srcset) for (const candidate of srcset[1].split(',')) checkReference(candidate.trim().split(/\s+/)[0], from, rel);
  }
  for (const m of body.matchAll(/\b(?:href|src)="([^"]+)"/g)) checkReference(m[1], from, rel);
}
for (const file of files(root).filter(f => f.endsWith('.css'))) {
  const rel = path.relative(root, file).replaceAll(path.sep, '/');
  checkCss(fs.readFileSync(file, 'utf8'), new URL(`${base}/${rel}`, 'https://local.invalid'), rel);
}
const home = docs.get(path.join(root, 'index.html')) || '';
const about = docs.get(path.join(root, 'about/index.html')) || '';
if (!home.includes('I like building things.') || (home.match(/class="project-card"/g) || []).length !== 4) errors.push('Homepage: expected revised introduction and four featured projects');
for (const id of ['new-england','st-pauls','outside','bucknell','building']) if (!about.includes(`id="${id}"`)) errors.push(`About: missing revised chapter ${id}`);
if (!about.includes('Always making')) errors.push('About: old content or missing introduction');
if (fs.existsSync(path.join(root, 'projects/bicycle-computer-mount/index.html'))) errors.push('Removed bicycle-mount project still published');
const summary = {pages: html.length, internalReferences: refs, imageReferences: images, renderedMathExpressions: math, embeddedStylePages, deploymentBase: base || '/', errors};
fs.mkdirSync('docs', {recursive: true});
fs.writeFileSync(process.env.QA_OUTPUT || 'docs/build-verification.json', JSON.stringify(summary, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));
if (errors.length) process.exit(1);
