import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import {posts} from '../lib/posts';import {absolute} from '../lib/site';
export async function GET(context:APIContext){return rss({title:'Varshith Sai Ulisi — Journal',description:'Events, community experiences, and lessons from building opportunity.',site:context.site!,items:(await posts()).map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.published,link:absolute(`journal/${p.id}/`,context.site)})),customData:'<language>en-us</language>'});}
