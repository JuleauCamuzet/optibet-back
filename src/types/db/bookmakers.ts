export type Bookmaker = {
  id: string
  name: string
  key: string
  region_id: string
  created_at: Date
}

export const checkIfBookmaker = (val: any): val is Bookmaker => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.name === 'string' &&
    typeof val.key === 'string' &&
    typeof val.region_id === 'string' &&
    val.created_at instanceof Date
  )
}

export const checkIfBookmakerArray = (val: any): val is Bookmaker[] => {
  return Array.isArray(val) && val.every((element) => checkIfBookmaker(element))
}
