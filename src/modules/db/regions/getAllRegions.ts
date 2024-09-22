import { Client } from 'pg'

import { getAllRegionsFromDb } from '../../../db/regions/get/all'

export const getAllRegions = async (client: Client) => {
  const result = await getAllRegionsFromDb(client)

  return result
}
