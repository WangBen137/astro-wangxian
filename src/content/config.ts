import { defineCollection, z } from 'astro:content';

const examples = defineCollection({ type: 'content' });

// 定义博客文章集合
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  })
});

export const collections = { examples, blog };