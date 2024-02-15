/** @jsxImportSource solid-js */

import { createSignal, For } from "solid-js"

import { $selectedTags } from "@/stores/filter.store"

import Tag from "./tag"

export default function Filter(props: { tags: string[] }) {
  return (
    <div class="sticky top-20 space-y-3">
      <h3 class="font-semibold">Tags</h3>
      <div class="flex flex-wrap gap-2.5">
        <For each={props.tags}>{(tag) => <TagButton name={tag} />}</For>
      </div>
    </div>
  )
}

function TagButton(props: { name: string }) {
  const [isSelected, setIsSelected] = createSignal(false)

  const toggleFilter = () => {
    if (isSelected()) {
      // setting undefined will remove optional key
      $selectedTags.setKey(props.name, undefined)
      setIsSelected(false)

      return
    }

    $selectedTags.setKey(props.name, props.name)
    setIsSelected(true)
  }

  return (
    <button type="button" onClick={toggleFilter}>
      <Tag active={isSelected()} clickable>
        {props.name.split(" ").join("-")}
      </Tag>
    </button>
  )
}
