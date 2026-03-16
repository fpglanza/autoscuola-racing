import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string().optional(),
    intro: z.string().optional(),
  }),
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  pages,
  team,
};