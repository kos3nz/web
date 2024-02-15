/** @jsxImportSource solid-js */

import type { Snippet } from "@/types/global.types.ts"

import { Icons } from "./icons.tsx"

export default function SnippetCard({
  snippet: { slug, title, description, tags },
}: {
  snippet: Snippet
}) {
  const Icon = Icons[tags[0] as keyof typeof Icons]

  return (
    <a
      href={slug}
      class="group relative w-full rounded-md p-4 ring-1 ring-muted duration-300 hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary/50 md:hover:-translate-y-0.5 md:focus-visible:-translate-y-0.5"
    >
      {/* Shadow */}
      <div class="absolute inset-0 hidden rounded-xl opacity-0 shadow-[0_4px_20px_2px] shadow-primary/30 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:block" />

      <div>
        {Icon && (
          <Icon class="size-5 text-muted-foreground transition-colors duration-300" />
        )}
        <h3 class="mb-1 mt-3 font-bold text-link">{title}</h3>
        <p class="text-xs text-muted-foreground">{description}</p>
      </div>
    </a>
  )
}
