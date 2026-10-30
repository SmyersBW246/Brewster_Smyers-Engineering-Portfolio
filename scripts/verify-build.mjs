import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');const repository=process.env.GITHUB_REPOSITORY||'';const [owner,name]=repository.split('/');const computed=name&&name.toLowerCase()!==`${owner}.github.io`.toLowerCase()?`/${name}`:'/';const base=(process.env.SITE_BASE||computed).replace(/\/$/,'');const errors=[];
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
if(!fs.existsSync(root))throw new Error('Run npm run build first.');
const html=files(root).filter(f=>f.endsWith('.html'));const docs=new Map(html.map(f=>[f,fs.readFileSync(f,'utf8')]));let refs=0,images=0,math=0;
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&#x26;','&');
for(const [file,body] of docs){
 const rel=path.relative(root,file);if((body.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(`${rel}: expected one h1`);
 if(!body.includes('lang="en"'))errors.push(`${rel}: missing page language`);
 if(!body.includes('name="description"'))errors.push(`${rel}: missing description`);
 if(body.includes('katex-error'))errors.push(`${rel}: failed math`);
 if(body.includes('—'))errors.push(`${rel}: em dash in public copy`);
 math+=(body.match(/class="katex"/g)||[]).length;
 for(const m of body.matchAll(/<img\b[^>]*>/g)){images++;if(!/\balt="[^"]+"/.test(m[0]))errors.push(`${rel}: missing nonempty alt`)}
 const route=rel==='404.html'?'/404.html':`/${rel.replace(/index\.html$/,'')}`;const from=new URL(`${base}${route}`,'https://local.invalid');
 for(const m of body.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const raw=decode(m[1]);if(/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(raw))continue;
  const target=new URL(raw,from);if(base&&!target.pathname.startsWith(`${base}/`)&&target.pathname!==base){errors.push(`${rel}: link escapes deployment prefix ${raw}`);continue}
  const clean=decodeURIComponent(target.pathname.slice(base.length)).replace(/^\//,'');let dest=path.join(root,clean);if(fs.existsSync(dest)&&fs.statSync(dest).isDirectory())dest=path.join(dest,'index.html');
  refs++;if(!fs.existsSync(dest)){errors.push(`${rel}: missing ${raw}`);continue}
  if(target.hash&&dest.endsWith('.html')){const id=decodeURIComponent(target.hash.slice(1));const content=docs.get(dest)||fs.readFileSync(dest,'utf8');if(!content.includes(`id="${id}"`))errors.push(`${rel}: missing anchor ${raw}`)}
 }
}
for(const file of files(root).filter(f=>f.endsWith('.css'))){const body=fs.readFileSync(file,'utf8');for(const m of body.matchAll(/url\(["']?([^"')]+)["']?\)/g)){if(m[1].startsWith('data:')||m[1].startsWith('http'))continue;const local=m[1].startsWith('/')?path.join(root,m[1].slice(base.length).replace(/^\//,'')):path.resolve(path.dirname(file),m[1]);if(!fs.existsSync(local))errors.push(`${path.relative(root,file)}: missing CSS asset ${m[1]}`)}}
const summary={pages:html.length,internalReferences:refs,imageReferences:images,renderedMathExpressions:math,deploymentBase:base||'/',errors};
fs.mkdirSync('docs',{recursive:true});fs.writeFileSync(process.env.QA_OUTPUT||'docs/build-verification.json',JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary,null,2));if(errors.length)process.exit(1);
