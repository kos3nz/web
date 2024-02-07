// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().optional(),
  }),
})

const snippetsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  posts: postsCollection,
  snippets: snippetsCollection,
}
