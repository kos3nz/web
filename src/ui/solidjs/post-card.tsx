/** @jsxImportSource solid-js */

import { For } from 'solid-js'
import type { Post } from 'types/global.d.ts'
import Tag from 'ui/solidjs/tag.tsx'
import DateTime from 'ui/solidjs/date-time.tsx'

export default function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={`/blog/${post.slug}/`}
      class="group relative overflow-hidden rounded-xl"
    >
      <span class="absolute inset-0 bg-slate-400/20" />
      <span class="absolute -right-1/2 -top-1/2 h-full w-full origin-bottom-left rotate-12 bg-[radial-gradient(#22d3ee_0%,_transparent_75%)] transition-transform duration-500 lg:group-hover:-rotate-12" />

      <div class="relative flex h-full flex-col overflow-hidden rounded-xl border border-transparent">
        <div class="aspect-video overflow-hidden">
          {/* Image */}
          <div class="flex h-full w-full items-center justify-center bg-slate-800">
            IMG
          </div>
        </div>

        <div class="flex-1 bg-slate-900 p-6">
          <div class="flex items-center justify-between border-b border-slate-400/20 pb-1">
            <DateTime dateTime={post.publishedDate} />
            <div class="flex gap-x-2">
              <For each={post.tags}>{(tag) => <Tag name={tag} />}</For>
            </div>
          </div>
          <h3 class="mt-2 pb-8 text-xl font-bold md:text-xl">{post.title}</h3>
          <div class="absolute bottom-6 left-6 flex items-center justify-between">
            <div class="flex items-end gap-x-1 duration-500 lg:group-hover:translate-x-1">
              <span class="text-sm font-semibold text-cyan-400 transition-colors duration-500 md:text-base lg:text-slate-400 lg:group-hover:text-cyan-400">
                Read more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline
                  id="chevronLeft1"
                  points="7 7 12 12 7 17"
                  class="translate-x-[-6px] text-cyan-400 opacity-0 transition-all duration-500 lg:text-slate-400 lg:group-hover:translate-x-0 lg:group-hover:text-cyan-400 lg:group-hover:opacity-100"
                />
                <polyline
                  id="chevronLeft2"
                  points="7 7 12 12 7 17"
                  class="text-cyan-400 transition-all duration-500 lg:text-slate-400 lg:group-hover:translate-x-[6px] lg:group-hover:text-cyan-400"
                />
                <polyline
                  id="chevronRight1"
                  points="13 7 18 12 13 17"
                  class="text-cyan-400 transition-all duration-500 lg:text-slate-400 lg:group-hover:translate-x-4 lg:group-hover:opacity-0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
