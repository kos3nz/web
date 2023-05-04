/* eslint-disable react-hooks/rules-of-hooks*/

import { useStore } from '@nanostores/solid'
import { atom, map } from 'nanostores'

type FilterBy = {
  title: string
  tags: string[]
}

export const searchQuery = atom('')

export const selectedTags = map<Record<string, string | undefined>>({})

export const filterValue = <T extends FilterBy>(values: T[]) => {
  const $searchQuery = useStore(searchQuery)
  const $selectedTags = useStore(selectedTags)

  return values.filter((value) => {
    if (Object.values($selectedTags()).length > 0) {
      // if any tag is not found in selected tags, return false (remove from the posts)
      if (!value.tags.some((tag) => !!$selectedTags()[tag])) return false
    }

    return value.title.toLowerCase().includes($searchQuery().toLowerCase())
  })
}
