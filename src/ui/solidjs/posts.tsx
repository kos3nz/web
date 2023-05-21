/** @jsxImportSource solid-js */

import { For } from 'solid-js'
import { filterValue } from 'store/filter-store.ts'
import type { Post } from 'types/global.types.ts'
import PostCard from 'ui/solidjs/post-card.tsx'

export default function Posts(props: { posts: Post[] }) {
  const filtered = () => filterValue(props.posts)

  return (
    <div class="relative grid gap-12 md:gap-16">
      <span class="absolute bottom-0 left-0 top-3 hidden w-0 border-l-[1.5px] border-dashed border-slate-400/20 md:block" />
      <For each={filtered()}>
        {(post) => (
          <div class="relative">
            <div class="peer">
              <PostCard post={post} />
            </div>

            {/* Dot */}
            <span class="absolute -left-[2.25px] top-[10px] hidden h-1.5 w-1.5 rounded-full border-[1.5px] border-slate-600 bg-slate-900 transition-colors duration-500 peer-hover:border-cyan-500 peer-hover:bg-cyan-500 md:block" />
          </div>
        )}
      </For>
    </div>
  )
}
