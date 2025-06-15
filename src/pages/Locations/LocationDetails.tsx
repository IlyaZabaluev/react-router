import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../api/apiClients/apiClients'
import type { Location } from './types'

export const LocationDetails = () => {
  const { id } = useParams()
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(() => {
    api.locations.getById(Number(id)).then(setLocation)
  }, [id])

  if (!location) {
    return <div>Location not found!</div>
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {location.residents.length}</p>
    </div>
  )
}
