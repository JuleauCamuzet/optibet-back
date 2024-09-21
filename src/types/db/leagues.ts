export type League = {
  id: string
  key: string
  sport_id: string
  name: string
  description: string
  created_at: Date
}

export const checkIfLeague = (val: any): val is League => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.key === 'string' &&
    typeof val.sport_id === 'string' &&
    typeof val.name === 'string' &&
    typeof val.description === 'string' &&
    val.created_at instanceof Date
  )
}

export const checkIfLeagueArray = (val: any): val is League[] => {
  return Array.isArray(val) && val.every((element) => checkIfLeague(element))
}
