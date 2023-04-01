import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('无心'),
    sortOrder: z.number(),
    tags: z.array(z.string()),
    pubDate: z.date(),
    topping: z.boolean().default(false),
    length: z.number()
  }),
});
export const collections = {
  'docs': blogCollection,
};