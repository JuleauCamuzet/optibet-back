export type Move = {
  id: string
  date: Date
  bet_a_id: string
  bet_b_id: string
  benefits: string
  created_at: Date
}

export const checkIfMove = (val: any): val is Move => {
  return (
    val &&
    typeof val.id === 'string' &&
    val.date instanceof Date &&
    typeof val.bet_a_id === 'string' &&
    typeof val.bet_b_id === 'string' &&
    typeof val.benefits === 'string' &&
    val.created_at instanceof Date
  )
}

export const checkIfMoveArray = (val: any): val is Move[] => {
  return Array.isArray(val) && val.every((element) => checkIfMove(element))
}
