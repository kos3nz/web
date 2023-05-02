/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'
import { For } from 'solid-js'
import { searchQuery, selectedTags } from 'store/filterStore'
import type { Post } from 'types/global'
import PostCard from 'ui/solidjs/post-card.tsx'

export default function Posts(props: { posts: Post[] }) {
  const $searchQuery = useStore(searchQuery)
  const $selectedTags = useStore(selectedTags)

  const filtered = () =>
    props.posts.filter((post) => {
      if (Object.values($selectedTags()).length > 0) {
        // if any tag is not found in selected tags, return false (remove from the posts)
        if (!post.tags.some((tag) => !!$selectedTags()[tag])) return false
      }

      return post.title.toLowerCase().includes($searchQuery().toLowerCase())
    })

  return (
    <div class="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <For each={filtered()}>{(post) => <PostCard post={post} />}</For>
    </div>
  )
}
