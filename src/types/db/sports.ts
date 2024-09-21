export type Sport = {
  id: string
  name: string
  created_at: Date
}

export const checkIfSport = (val: any): val is Sport => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.name === 'string' &&
    val.created_at instanceof Date
  )
}

export const checkIfSportArray = (val: any): val is Sport[] => {
  return Array.isArray(val) && val.every((element) => checkIfSport(element))
}
