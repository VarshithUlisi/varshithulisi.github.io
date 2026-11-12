import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const journal = defineCollection({loader: glob({pattern:'**/*.md',base:'./src/content/journal'}),schema:z.object({
 title:z.string(), description:z.string(), published:z.coerce.date(), eventDate:z.coerce.date().optional(), venue:z.string().optional(), eventLabel:z.string(), category:z.enum(['Events','Speaking','Presentations','Community Service','Leadership','Ventures','Research','Personal Reflections']), sourcePages:z.string().default(''), sourceNote:z.string().optional(), related:z.string(), draft:z.boolean().default(true), featured:z.boolean().default(false), image:z.string().optional(), imageAlt:z.string().optional()
}).refine(data=>!data.image || !!data.imageAlt,{message:'Images require meaningful alt text.'})});
export const collections = {journal};
