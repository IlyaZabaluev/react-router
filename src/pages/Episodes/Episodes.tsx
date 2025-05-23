import { Link } from "react-router-dom";
import { type Episode } from "../../types/episode";
import episodeData from "../../data/episode.json";
import { SortButton } from "../../components";
import { useSorting } from "../../hooks/useSorting";
import { sortByCreated } from "../../utils/sorted";

const typedEpisodeData = episodeData as Episode[];

export const Episodes = () => {
  const { sortMode, toggleSort } = useSorting("heroes");
  const displayedEpisode = sortByCreated(typedEpisodeData, sortMode);
  return (
    <div>
      <h1>List of episodes:</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />
      <div>
        {displayedEpisode.map((episode) => (
          <Link to={`/episodes/${episode.id}`} key={episode.id}>
            <h3>{episode.name}</h3>
            <p>Created: {new Date(episode.created).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
