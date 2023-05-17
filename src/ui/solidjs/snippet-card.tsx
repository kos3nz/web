/** @jsxImportSource solid-js */

import { For } from 'solid-js'
import Tag from 'ui/solidjs/tag.tsx'
import type { Snippet } from 'types/global.types.ts'

export default function SnippetCard({
  snippet: { slug, title, tags },
}: {
  snippet: Snippet
}) {
  return (
    <a
      href={slug}
      class="group relative w-full rounded-xl p-4 ring-1 ring-slate-400/20 duration-300 hover:ring-2 hover:ring-cyan-500/50 lg:hover:-translate-y-1"
    >
      {/* Shadow */}
      <div class="absolute inset-0 hidden rounded-xl opacity-0 shadow-[0_4px_20px_2px] shadow-cyan-700/30 transition-opacity duration-500 group-hover:opacity-100 lg:block" />

      <div class="space-y-3">
        <h3 class="border-b border-slate-400/20 pb-1 text-lg font-bold">
          {title}
        </h3>
        <div class="flex gap-2">
          <For each={tags}>{(tag) => <Tag name={tag} />}</For>
        </div>
      </div>
    </a>
  )
}
