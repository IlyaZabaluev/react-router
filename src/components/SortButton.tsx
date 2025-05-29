import type { SortButtonProps } from '../types/button-sort'
import type { SortMode } from '../types/sort-mode'

export const SortButton = ({ sortMode, onClick }: SortButtonProps) => {
  const getSortButtonText = (sortMode: SortMode): string => {
    return sortMode === null
      ? 'Original Order'
      : sortMode === 'ASC'
      ? '↑ Oldest First'
      : '↓ Newest First'
  }

  return <button onClick={onClick}>{getSortButtonText(sortMode)}</button>
}
