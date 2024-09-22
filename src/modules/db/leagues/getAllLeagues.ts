import { Client } from 'pg'

import { getAllLeaguesFromDb } from '../../../db/leagues/get/all'

export const getAllLeagues = async (client: Client) => {
  const result = await getAllLeaguesFromDb(client)

  return result
}
