import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import readline from 'node:readline/promises';
const here=path.dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(fs.readFileSync(path.join(here,'repair-manifest.json'),'utf8'));
const hash=(bytes,text)=>createHash('sha256').update(text?Buffer.from(bytes.toString('utf8').replaceAll('\r\n','\n')):bytes).digest('hex');
try {
 let input=process.argv.includes('--repo')?process.argv[process.argv.indexOf('--repo')+1]:null;
 if(!input){const rl=readline.createInterface({input:process.stdin,output:process.stdout});try{input=await rl.question('Paste the local portfolio repository folder path: ');}finally{rl.close();}}
 const repo=path.resolve((input||'').trim().replace(/^"|"$/g,''));
 if(!fs.existsSync(path.join(repo,'.git')))throw Error('This is not a Git repository folder. Use GitHub Desktop > Repository > Show in Explorer.');
 const pkg=JSON.parse(fs.readFileSync(path.join(repo,'package.json'),'utf8'));
 if(pkg.name!=='brewster-smyers-engineering-portfolio')throw Error('This folder is not the portfolio project.');
 const changes=[];
 for(const item of manifest.files){
  const target=path.join(repo,item.path);
  if(!fs.existsSync(target)){
   if(item.action==='remove')continue;
   throw Error(`Required existing file is missing: ${item.path}. No files changed.`);
  }
  const current=hash(fs.readFileSync(target),item.text);
  if(item.action==='update'&&current===item.newSha256)continue;
  if(current!==item.oldSha256)throw Error(`${item.path} has changes outside this repair. No files changed. Preserve your edits and use the manual instructions.`);
  if(item.action==='update'){
   const payload=path.join(here,'payload',item.path);
   if(hash(fs.readFileSync(payload),item.text)!==item.newSha256)throw Error(`Repair payload is damaged: ${item.path}`);
  }
  changes.push(item);
 }
 if(process.argv.includes('--check')){console.log(`Validation passed. ${changes.length} changes would be applied.`);process.exit(0);}
 for(const item of changes){
  const target=path.join(repo,item.path);
  if(item.action==='remove')fs.unlinkSync(target);
  else fs.copyFileSync(path.join(here,'payload',item.path),target);
  console.log(`${item.action==='remove'?'Removed':'Updated'} ${item.path}`);
 }
 console.log(changes.length?'Repair applied. In GitHub Desktop, review, commit and Push origin; then run Publish approved portfolio.':'The repair is already applied.');
} catch(error){console.error(error.message);process.exitCode=1;}
