import { Client } from 'pg'

import { getAllSportsFromDb } from '../../../db/sports/get/all'

export const getAllSports = async (client: Client) => {
  const result = await getAllSportsFromDb(client)

  return result
}
