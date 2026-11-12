import { getCollection } from 'astro:content';
export const posts = async () => (await getCollection('journal', ({data}) => !data.draft && data.published <= new Date())).sort((a,b)=>b.data.published.valueOf()-a.data.published.valueOf() || a.data.title.localeCompare(b.data.title));
