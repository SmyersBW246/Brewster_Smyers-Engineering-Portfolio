import fs from 'node:fs';
const dirs=['src/content/projects','src/content/coursework'];const result=dirs.map(dir=>({dir,records:fs.readdirSync(dir).filter(f=>f.endsWith('.md')).length}));
for(const {dir} of result)for(const name of fs.readdirSync(dir)){if(!name.endsWith('.md'))continue;const text=fs.readFileSync(`${dir}/${name}`,'utf8');if(!text.startsWith('---\n')||!text.includes('\n---\n'))throw new Error(`${name}: invalid frontmatter`);if(text.includes('—'))throw new Error(`${name}: em dash`);if(/hero:.*(?:wheel-concept|drone-concept)/.test(text))throw new Error(`${name}: generated project hero`)}
console.log(JSON.stringify(result));
