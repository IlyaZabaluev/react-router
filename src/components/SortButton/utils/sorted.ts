import type { SortMode } from '../../../types/sort-mode'

export const sortByCreated = <T extends { created: string }>(
  data: T[],
  sortMode: SortMode
): T[] => {
  if (!sortMode) return [...data]

  return [...data].sort((a, b) => {
    const dateA = new Date(a.created).getTime()
    const dateB = new Date(b.created).getTime()
    return sortMode === 'ASC' ? dateA - dateB : dateB - dateA
  })
}
