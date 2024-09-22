import { Client } from 'pg'

import { getAllBookmakersFromDb } from '../../../db/bookmakers/get/all'

export const getAllBookmakers = async (client: Client) => {
  const result = await getAllBookmakersFromDb(client)

  return result
}
