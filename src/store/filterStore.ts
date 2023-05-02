import { atom, map } from 'nanostores'

export const searchQuery = atom('')

export const selectedTags = map<Record<string, string | undefined>>({})
