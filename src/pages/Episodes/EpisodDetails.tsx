import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../api/apiClients/apiClients'
import type { Episode } from '../../types/episode'

export const EpisodeDetails = () => {
  const { id } = useParams()
  const [episode, setEpisode] = useState<Episode | null>(null)

  useEffect(() => {
    api.episodes.getById(Number(id)).then(setEpisode)
  }, [id])

  if (!episode) {
    return <div>Episode not found!</div>
  }

  return (
    <div>
      <h1>{episode.name}</h1>
      <p>Episode: {episode.episode}</p>
      <p>Air Date: {episode.air_date}</p>
      <p>Characters: {episode.characters.length}</p>
    </div>
  )
}
