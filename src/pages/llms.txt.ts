import type {APIContext} from 'astro';
import {absolute} from '../lib/site';
export function GET({site}:APIContext){return new Response(`# Varshith Sai Ulisi\n\nStudent entrepreneur and community builder working across education, technology, and leadership.\n\nOfficial site: ${absolute('',site)}\nSitemap: ${absolute('sitemap.xml',site)}\n\n${['about','impact','leadership','projects','journal','events','recognition','contact'].map(p=>`- [${p}](${absolute(p+'/',site)})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain'}});}
