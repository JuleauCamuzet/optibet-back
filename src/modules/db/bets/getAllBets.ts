import { Client } from 'pg'

import { getAllBetsFromDb } from '../../../db/bets/get/all'

export const getAllBets = async (client: Client) => {
  const result = await getAllBetsFromDb(client)

  return result
}
