/** @jsxImportSource solid-js */

import type { Post } from "@/types/global.types.ts"
import DateTime from "@/ui/solid/date-time.tsx"

export default function PostCard({ post }: { post: Post }) {
  return (
    <div class="relative md:grid md:grid-cols-5">
      <div class="ml-6 hidden md:block">
        <DateTime dateTime={post.publishedDate} />
      </div>

      <a href={`/posts/${post.slug}/`} class="group relative md:col-span-4 md:mr-4">
        {/* Background */}
        <div class="absolute -inset-x-6 -inset-y-3 bg-slate-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:-inset-4 md:rounded-xl" />

        <div class="flex items-center border-b border-slate-600 pb-1 md:hidden">
          <DateTime dateTime={post.publishedDate} />
        </div>

        <h3 class="my-2 text-lg font-bold text-slate-200 md:mt-0">{post.title}</h3>

        <p class="mb-4 text-xs leading-5 text-slate-400 md:text-sm md:leading-6">
          {post.description}
        </p>

        <div class="flex items-end gap-x-1 duration-500 md:group-hover:translate-x-1">
          <span class="text-sm font-semibold text-cyan-500 transition-colors duration-500 md:text-slate-400 md:group-hover:text-cyan-500">
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
            class="size-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline
              id="chevronLeft1"
              points="7 7 12 12 7 17"
              class="translate-x-[-6px] text-cyan-500 opacity-0 transition-all duration-500 md:text-slate-400 md:group-hover:translate-x-0 md:group-hover:text-cyan-500 md:group-hover:opacity-100"
            />
            <polyline
              id="chevronLeft2"
              points="7 7 12 12 7 17"
              class="text-cyan-500 transition-all duration-500 md:text-slate-400 md:group-hover:translate-x-[6px] md:group-hover:text-cyan-500"
            />
            <polyline
              id="chevronRight1"
              points="13 7 18 12 13 17"
              class="text-cyan-500 transition-all duration-500 md:text-slate-400 md:group-hover:translate-x-4 md:group-hover:opacity-0"
            />
          </svg>
        </div>
      </a>
    </div>
  )
}
