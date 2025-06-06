import { Link } from 'react-router-dom'
import { useInfiniteScroll } from '../../hooks/useInfiniteScrooll'
import { api } from '../../api/apiClients/apiClients'
import { useSorting } from '../../hooks/useSorting'
import { SortButton } from '../../components'
import { useEffect, useState } from 'react'

export const Locations = () => {
  const { sortMode, toggleSort } = useSorting('locations')
  const {
    data: loadedLocations,
    loading,
    lastElementRef,
  } = useInfiniteScroll(api.locations.getAll)
  const [displayedLocations, setDisplayedLocations] = useState(loadedLocations)

  useEffect(() => {
    const sorted = [...loadedLocations].sort((a, b) =>
      sortMode === 'ASC'
        ? new Date(a.created).getTime() - new Date(b.created).getTime()
        : new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    setDisplayedLocations(sorted)
  }, [sortMode, loadedLocations])

  return (
    <div>
      <h1>List of Locations</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />

      <div className="locations-grid">
        {displayedLocations.map((location, index) => (
          <div
            key={location.id}
            ref={
              index === displayedLocations.length - 1 ? lastElementRef : null
            }
          >
            <Link to={`/locations/${location.id}`}>
              <div>
                <h3>{location.name}</h3>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <p className="created-date">
                  Created: {new Date(location.created).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {loading && <div className="loader">Loading more locations...</div>}
    </div>
  )
}
