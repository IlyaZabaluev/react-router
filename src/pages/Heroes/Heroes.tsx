import { Link } from 'react-router-dom'
import { useInfiniteScroll } from '../../hooks/useInfiniteScrooll'
import { api } from '../../api/apiClients/apiClients'
import { useSorting } from '../../hooks/useSorting'
import { SortButton } from '../../components'
import { useEffect, useState } from 'react'

export const Heroes = () => {
  const { sortMode, toggleSort } = useSorting('heroes')
  const {
    data: loadedHeroes,
    loading,
    lastElementRef,
  } = useInfiniteScroll(api.heroes.getAll)
  const [displayedHeroes, setDisplayedHeroes] = useState(loadedHeroes)

  useEffect(() => {
    const sorted = [...loadedHeroes].sort((a, b) =>
      sortMode === 'ASC'
        ? new Date(a.created).getTime() - new Date(b.created).getTime()
        : new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    setDisplayedHeroes(sorted)
  }, [sortMode, loadedHeroes])

  return (
    <div>
      <h1>List of Heroes</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />

      <div className="heroes-grid">
        {displayedHeroes.map((hero, index) => (
          <div
            key={hero.id}
            ref={index === displayedHeroes.length - 1 ? lastElementRef : null}
          >
            <Link to={`/heroes/${hero.id}`}>
              <img src={hero.image} alt={hero.name} />
              <div>
                <h3>{hero.name}</h3>
                <p>Species: {hero.species}</p>
                <p className="created-date">
                  Created: {new Date(hero.created).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {loading && <div className="loader">Loading more heroes...</div>}
    </div>
  )
}
