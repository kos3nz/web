/** @jsxImportSource solid-js */

import DateTime from "@/components/solid/date-time"
import type { Post } from "@/types/global.types.ts"

export default function PostCard({ post }: { post: Post }) {
  return (
    <div class="group/wrapper relative flex flex-col">
      <div class="flex items-center gap-6 pb-1 pl-7">
        <DateTime dateTime={post.publishedDate} />
      </div>

      <div class="mb-1 border-l border-dashed pb-6 pl-3">
        <a
          href={`/posts/${post.slug}/`}
          class="group/link block rounded-md p-4 transition-colors duration-500 hover:bg-muted/50"
        >
          <h3 class="mb-2 text-lg font-bold text-heading">{post.title}</h3>
          <p class="mb-4 text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
            {post.description}
          </p>
          <ReadMore />
        </a>
      </div>

      {/* Dot */}
      <span class="absolute left-[-4.5px] top-1 size-2.5 rounded-full border-[2px] border-muted-foreground bg-background transition-colors duration-300 group-hover/wrapper:border-primary" />
    </div>
  )
}

function ReadMore() {
  return (
    <div class="flex items-end gap-x-1 duration-500 md:group-hover/link:translate-x-0.5">
      <span class="text-sm font-semibold text-primary transition-colors duration-500 md:text-muted-foreground md:group-hover/link:text-primary">
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
          class="translate-x-[-6px] text-primary opacity-0 transition-all duration-500 md:text-muted-foreground md:group-hover/link:translate-x-0 md:group-hover/link:text-primary md:group-hover/link:opacity-100"
        />
        <polyline
          id="chevronLeft2"
          points="7 7 12 12 7 17"
          class="text-primary transition-all duration-500 md:text-foreground/60 md:group-hover/link:translate-x-[6px] md:group-hover/link:text-primary"
        />
        <polyline
          id="chevronRight1"
          points="13 7 18 12 13 17"
          class="text-primary transition-all duration-500 md:text-foreground/60 md:group-hover/link:translate-x-4 md:group-hover/link:opacity-0"
        />
      </svg>
    </div>
  )
}
