/** @jsxImportSource solid-js */

import type { Snippet } from 'types/global'

export default function SnippetCard({
  snippet: { slug, title, description, tags },
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

      <div class="flex items-center gap-2 border-b border-slate-400/20 pb-1">
        {/* <img src={imgUrl}  alt="Logo" class="h-5 w-5 object-contain" fetchpriority="low" elementtiming="" /> */}
        <h3 class="font-bold ">{title}</h3>
      </div>
      <div class="pt-2">
        <p class="text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </a>
  )
}
