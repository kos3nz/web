/** @jsxImportSource solid-js */

import type { Snippet } from 'types/global.types.ts'
import brandIcons from './icons/brand-icons'

export default function SnippetCard({
  snippet: { slug, title, description, tags },
}: {
  snippet: Snippet
}) {
  const Icon = brandIcons[tags[0] as keyof typeof brandIcons]

  return (
    <a
      href={slug}
      class="group relative w-full rounded-xl p-4 ring-1 ring-slate-400/20 duration-300 hover:ring-2 hover:ring-cyan-500/50 md:hover:-translate-y-1"
    >
      {/* Shadow */}
      <div class="absolute inset-0 hidden rounded-xl opacity-0 shadow-[0_4px_20px_2px] shadow-cyan-700/30 transition-opacity duration-500 group-hover:opacity-100 md:block" />

      <div>
        {Icon && (
          <Icon class="h-6 w-6 text-cyan-500 transition-colors duration-300 group-hover:text-cyan-500 md:text-slate-300" />
        )}
        <h3 class="mb-2 mt-4 font-bold">{title}</h3>
        <p class="text-sm text-slate-400">{description}</p>
      </div>
    </a>
  )
}
