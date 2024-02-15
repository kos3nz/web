/** @jsxImportSource solid-js */

import { For } from "solid-js"

import SnippetCard from "@/components/solid/snippet-card"
import { filterValue } from "@/stores/filter.store"
import type { Snippet } from "@/types/global.types.ts"

export default function SnippetsList(props: { snippets: Snippet[] }) {
  const filtered = () => filterValue(props.snippets)

  return (
    <div class="@container">
      <div class="grid gap-5 @lg:grid-cols-2">
        <For each={filtered()}>{(snippet) => <SnippetCard snippet={snippet} />}</For>
      </div>
    </div>
  )
}
