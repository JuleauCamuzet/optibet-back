export type Bet = {
  id: string
  team_name: string
  odd: string
  bookmaker_id: string
}

export const checkIfBet = (val: any): val is Bet => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.team_name === 'string' &&
    typeof val.odd === 'string' &&
    typeof val.bookmaker_id === 'string'
  )
}

export const checkIfBetArray = (val: any): val is Bet[] => {
  return Array.isArray(val) && val.every((element) => checkIfBet(element))
}
