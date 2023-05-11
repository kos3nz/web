/** @jsxImportSource solid-js */

import { For } from 'solid-js'
import { filterValue } from 'store/filter-store.ts'
import type { Post } from 'types/global.types.ts'
import PostCard from 'ui/solidjs/post-card.tsx'

export default function Posts(props: { posts: Post[] }) {
  const filtered = () => filterValue(props.posts)

  return (
    <div class="mt-12 grid gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      <For each={filtered()}>{(post) => <PostCard post={post} />}</For>
    </div>
  )
}
