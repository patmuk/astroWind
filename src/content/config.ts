import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    published: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.object({
      email: z.string().email().optional(),
      display_name: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      titel: z.string().optional(),
    }),
  }),
});

export const collections = {
  post: post,
};
