import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const base=(process.env.BASE_PATH||'/').replace(/\/$/,'');
const origin=process.env.SITE_URL||'https://varshithulisi.github.io';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk(root), html=files.filter(f=>f.endsWith('.html'));let links=0;
const required=['index.html','about/index.html','about/timeline/index.html','impact/index.html','leadership/index.html','projects/index.html','journal/index.html','recognition/index.html','contact/index.html','evidence/index.html','404.html','rss.xml','sitemap-index.xml','robots.txt','llms.txt','biography.txt'];
for(const f of required)assert(fs.existsSync(path.join(root,f)),`Missing ${f}`);
for(const file of html){const text=fs.readFileSync(file,'utf8');assert.equal((text.match(/<h1(?:\s|>)/g)||[]).length,1,`${file}: exactly one h1`);assert(text.includes('lang="en"'),`${file}: language`);assert(text.includes('name="description"'),`${file}: description`);assert(text.includes('rel="canonical"'),`${file}: canonical`);assert(text.includes('Skip to content'),`${file}: skip link`);
for(const m of text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){const schema=JSON.parse(m[1]);assert(schema['@graph'].some(n=>n['@type']==='Person'));}
for(const m of text.matchAll(/(?:href|src)="([^"]+)"/g)){let value=m[1].replaceAll('&amp;','&');if(!value.startsWith('/')&&!value.startsWith('#'))continue;if(value.startsWith('//'))continue;const url=new URL(value,'https://local.test'+base+'/'+path.relative(root,file).replace(/index\.html$/,''));let pathname=decodeURIComponent(url.pathname);assert(!base||pathname===base||pathname.startsWith(base+'/'),`${file}: base prefix ${value}`);pathname=pathname.slice(base.length);let target=path.join(root,pathname);if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');assert(fs.existsSync(target),`${file}: broken link ${value}`);if(url.hash&&target.endsWith('.html')){const dest=fs.readFileSync(target,'utf8');assert(dest.includes(`id="${url.hash.slice(1)}"`),`${file}: missing fragment ${value}`);}links++;}
assert(!text.includes('Weighted GPA')&&!text.includes('800+')&&!text.includes('70,000'),`${file}: excluded claims`);
}
const feed=fs.readFileSync(path.join(root,'rss.xml'),'utf8');const count=(feed.match(/<item>/g)||[]).length;assert(count>=5,'Expected seeded journal entries');assert(feed.includes(origin+base+'/journal/'),'RSS base URL');assert(!files.some(f=>f.endsWith('.pdf')),'Private source must not ship');
console.log(`Verified ${html.length} HTML pages, ${links} internal links, structured data, required routes, privacy exclusions, and ${count} RSS entries (base: ${base||'/'}).`);
