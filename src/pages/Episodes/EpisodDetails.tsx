import { useParams } from "react-router-dom";
import { type Episode } from "../../types/episode";
import episodeData from "../../data/episode.json";

export const EpisodeDetails = () => {
  const { id } = useParams();
  const episode = episodeData.find((e) => e.id === Number(id)) as Episode;

  if (!episode) {
    return <div>Episode not found!</div>;
  }

  return (
    <div>
      <h1>{episode.name}</h1>
      <p>Release date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
    </div>
  );
};
