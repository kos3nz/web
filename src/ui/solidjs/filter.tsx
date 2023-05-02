/** @jsxImportSource solid-js */

import cx from 'clsx'
import { For, createSignal } from 'solid-js'

import { searchQuery, selectedTags } from 'store/filterStore.ts'
import SearchIcon from 'ui/solidjs/icons/search-icon.tsx'

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
    <div class="relative flex max-w-xl items-center rounded-xl bg-slate-800/80">
      <input
        type="search"
        name="query"
        id="query"
        placeholder="Search posts..."
        class="flex-1 bg-transparent py-2 pl-4 pr-12 text-lg"
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
        'rounded-xl bg-slate-600/50 px-[12px] py-2 text-sm font-bold lowercase shadow-highlight transition duration-300 hover:scale-105',
        isSelected() && 'text-cyan-500',
      )}
      onClick={toggleFilter}
    >
      {props.name.split(' ').join('-')}
    </button>
  )
}
