import type { SortButtonProps } from './types'
import type { SortMode } from '../../hooks/sort-mode'
import Button from '@mui/material/Button'

export const SortButton = ({ sortMode, onClick }: SortButtonProps) => {
  const getSortButtonText = (sortMode: SortMode): string => {
    return sortMode === null
      ? 'Original Order'
      : sortMode === 'ASC'
      ? '↑ Oldest First'
      : '↓ Newest First'
  }

  return (
    <Button onClick={onClick} variant="contained">
      {getSortButtonText(sortMode)}
    </Button>
  )
}
