// eslint-disable-next-line import/no-unresolved
import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().optional(),
  }),
})

// const snippetCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//   }),
// })

export const collections = {
  blog: blogCollection,
  // snippets: snippetCollection,
}
