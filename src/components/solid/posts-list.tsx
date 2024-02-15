/** @jsxImportSource solid-js */

import { For } from "solid-js"

import PostCard from "@/components/solid/post-card"
import { filterValue } from "@/stores/filter.store"
import type { Post } from "@/types/global.types.ts"

export default function PostsList(props: { posts: Post[] }) {
  const filtered = () => filterValue(props.posts)

  return (
    <div>
      <For each={filtered()}>{(post) => <PostCard post={post} />}</For>
    </div>
  )
}
