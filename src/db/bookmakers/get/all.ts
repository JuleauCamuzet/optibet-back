import { Client } from 'pg'

import { getManyRows } from '../../../helpers/db/get/many'
import {
  checkIfDbError,
  DbError,
  DbErrorCodeEnum,
} from '../../../types/errors/db'
import { checkIfBookmakerArray } from '../../../types/db/bookmakers'

export const getAllBookmakersFromDb = async (client: Client) => {
  const result = await getManyRows(
    `SELECT id, name, region_id, key FROM bookmakers`,
    [],
    client
  )

  if (checkIfDbError(result) || checkIfBookmakerArray(result)) {
    return result
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all bookmakers from db.',
      time: new Date().getTime(),
    }

    return dbError
  }
}
