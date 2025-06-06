import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { type SortMode } from '../types/sort-mode'

export type SortableEntity = 'heroes' | 'locations' | 'episodes'

export const useSorting = (entity: SortableEntity) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortMode, setSortMode] = useState<SortMode>(null)

  const toggleSort = () => {
    const newMode =
      sortMode === null ? 'ASC' : sortMode === 'ASC' ? 'DESC' : null

    setSortMode(newMode)
    if (newMode) {
      setSearchParams({ [`${entity}Sort`]: newMode })
    } else {
      searchParams.delete(`${entity}Sort`)
      setSearchParams(searchParams)
    }
  }

  return { sortMode, toggleSort }
}
