import { Link } from "react-router-dom";
import { useInfiniteScroll } from "../../hooks/useInfiniteScrooll";
import { api } from "../../api/apiClients";
import { useSorting } from "../../hooks/useSorting";
import { SortButton } from "../../components";
import { useEffect, useState } from "react";

export const Episodes = () => {
  const { sortMode, toggleSort } = useSorting("episodes");
  const { data: loadedEpisodes, loading, lastElementRef } = useInfiniteScroll(
    api.episodes.getAll
  );
  const [displayedEpisodes, setDisplayedEpisodes] = useState(loadedEpisodes);

  useEffect(() => {
    const sorted = [...loadedEpisodes].sort((a, b) => 
      sortMode === 'ASC' 
        ? new Date(a.created).getTime() - new Date(b.created).getTime()
        : new Date(b.created).getTime() - new Date(a.created).getTime()
    );
    setDisplayedEpisodes(sorted);
  }, [sortMode, loadedEpisodes]);

  return (
    <div>
      <h1>List of Episodes</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />
      
      <div className="episodes-grid">
        {displayedEpisodes.map((episode, index) => (
          <div 
            key={episode.id}
            ref={index === displayedEpisodes.length - 1 ? lastElementRef : null}
          >
            <Link to={`/episodes/${episode.id}`}>
              <div>
                <h3>{episode.name}</h3>
                <p>Episode: {episode.episode}</p>
                <p>Air Date: {episode.air_date}</p>
                <p className="created-date">
                  Created: {new Date(episode.created).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {loading && <div className="loader">Loading more episodes...</div>}
    </div>
  );
};