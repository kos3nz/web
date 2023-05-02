import type { CollectionEntry } from 'astro:content'

export type Heading = { hash: string; depth: number; text: string }

export type Post = {
  slug: string
  title: string
  tags: string[]
  publishedDate: Date
  updatedDate: Date | undefined
}
