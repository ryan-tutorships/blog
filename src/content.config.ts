import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        autor: z.string().optional(),
        autorUrl: z.string().url().optional(),
        turma: z.string().optional(),
        data: z.date().optional(),
        canonicalUrl: z.string().url().optional(),
      }),
    }),
  }),
};
