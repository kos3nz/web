/** @jsxImportSource solid-js */

import cx from "clsx"
import { For, createSignal } from "solid-js"

import { searchQuery, selectedTags } from "@/store/filter-store.ts"
import { SearchIcon } from "@/ui/solid/icons.tsx"
import Tag from "./tag"

export default function Filter(props: { tags: string[] }) {
  return (
    <div class="space-y-5">
      <Search />

      <div class="flex flex-wrap gap-3">
        <For each={props.tags}>{(tag) => <TagButton name={tag} />}</For>
      </div>
    </div>
  )
}

function Search() {
  return (
    <div class="relative flex max-w-xl items-center rounded-lg bg-slate-800/80">
      <input
        type="search"
        name="query"
        id="query"
        placeholder="Search..."
        class="input h-[2.5rem] flex-1 bg-transparent pr-12 text-sm focus-visible:outline-cyan-500/75"
        onInput={(e) => searchQuery.set(e.target.value)}
      />
      <div class="pointer-events-none absolute right-2 p-2">
        <SearchIcon />
      </div>
    </div>
  )
}

function TagButton(props: { name: string }) {
  const [isSelected, setIsSelected] = createSignal(false)

  const toggleFilter = () => {
    if (isSelected()) {
      // setting undefined will remove optional key
      selectedTags.setKey(props.name, undefined)
      setIsSelected(false)

      return
    }

    selectedTags.setKey(props.name, props.name)
    setIsSelected(true)
  }

  return (
    <button
      type="button"
      class={cx(
        "flex justify-center items-center rounded-lg outline-none outline-offset-2 focus-visible:outline-cyan-500/75",
      )}
      onClick={toggleFilter}
    >
      <Tag active={isSelected()} clickable>
        {props.name.split(" ").join("-")}
      </Tag>
    </button>
  )
}
