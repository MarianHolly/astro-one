import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string().transform((str) => new Date(str)),
    // Add any other fields that are common across your blog posts
  }),
});

export const collections = {
  'blog': blogCollection,
};
