export type Bet = {
  id: string
  team_name: string
  odd: number
  bookmaker_id: string
  created_at: Date
}

export const checkIfBet = (val: any): val is Bet => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.team_name === 'string' &&
    typeof val.odd === 'number' &&
    typeof val.bookmaker_id === 'string' &&
    val.created_at instanceof Date
  )
}

export const checkIfBetArray = (val: any): val is Bet[] => {
  return Array.isArray(val) && val.every((element) => checkIfBet(element))
}
