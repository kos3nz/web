/** @jsxImportSource solid-js */

import { For } from 'solid-js'
import { filterValue } from 'store/filter-store.ts'
import type { Snippet } from 'types/global.d.ts'
import SnippetCard from 'ui/solidjs/snippet-card.tsx'

export default function Snippets(props: { snippets: Snippet[] }) {
  const filtered = () => filterValue(props.snippets)

  return (
    <div class="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <For each={filtered()}>
        {(snippet) => <SnippetCard snippet={snippet} />}
      </For>
    </div>
  )
}
