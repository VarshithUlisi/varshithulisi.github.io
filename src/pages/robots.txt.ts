import type { APIContext } from 'astro';import {absolute} from '../lib/site';
export function GET({site}:APIContext){return new Response(`User-agent: *\n${site?.hostname==='example.com'?'Disallow: /':'Allow: /'}\nSitemap: ${absolute('sitemap-index.xml',site)}\n`,{headers:{'Content-Type':'text/plain'}});}
