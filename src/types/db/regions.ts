export type Region = {
  id: string
  key: string
  name: string
}

export const checkIfRegion = (val: any): val is Region => {
  return (
    val &&
    val.id !== undefined &&
    typeof val.id === 'string' &&
    val.key !== undefined &&
    typeof val.key === 'string' &&
    val.name !== undefined &&
    typeof val.name === 'string'
  )
}

export const checkIfRegionArray = (val: any): val is Region[] => {
  return (
    val && Array.isArray(val) && val.every((element) => checkIfRegion(element))
  )
}
