/** @jsxImportSource solid-js */

import { For } from "solid-js"
import { filterValue } from "@/store/filter-store.ts"
import type { Snippet } from "@/types/global.types.ts"
import SnippetCard from "@/ui/solid/snippet-card.tsx"

export default function SnippetsList(props: { snippets: Snippet[] }) {
  const filtered = () => filterValue(props.snippets)

  return (
    <div class="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <For each={filtered()}>{(snippet) => <SnippetCard snippet={snippet} />}</For>
    </div>
  )
}
