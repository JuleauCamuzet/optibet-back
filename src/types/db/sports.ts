export type Sport = {
  id: string
  name: string
}

export const checkIfSport = (val: any): val is Sport => {
  return val && typeof val.id === 'string' && typeof val.name === 'string'
}

export const checkIfSportArray = (val: any): val is Sport[] => {
  return Array.isArray(val) && val.every((element) => checkIfSport(element))
}
