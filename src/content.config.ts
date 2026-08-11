import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tutorialCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/tutorial" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('老叶'),
    cover: z.string().optional(),
  }),
});

export const collections = {
  'tutorial': tutorialCollection,
};
