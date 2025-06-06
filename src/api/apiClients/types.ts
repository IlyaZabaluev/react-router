export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  created: string
  characters: string
}

export interface Hero {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: 'Alien' | 'Human'
  type?: string
  gender: 'Male' | 'Female' | 'unknown'
  image: string
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string | 'unknown'
  created: string
  residents: string
}
