export type Heading = { hash: string; depth: number; text: string }

export type Post = {
  slug: string
  title: string
  tags: string[]
  publishedDate: Date
  updatedDate: Date | undefined
}

export type Snippet = {
  slug: string
  title: string
  description: string
  tags: string[]
}
