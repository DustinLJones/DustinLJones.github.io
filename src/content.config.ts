import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const journals = defineCollection({
  loader: glob({ base: "./src/content/journals/", pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      readTimeMinutes: z.int(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects/", pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      pubDate: z.coerce.date(),
      githubPath: z.string(),
      demoPath: z.string(),
      associatedJournal: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  journals,
  projects,
};
