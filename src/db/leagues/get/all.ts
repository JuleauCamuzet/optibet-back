import { Client } from 'pg'

import { getManyRows } from '../../../helpers/db/get/many'
import {
  checkIfDbError,
  DbError,
  DbErrorCodeEnum,
} from '../../../types/errors/db'
import { checkIfLeagueArray, League } from '../../../types/db/leagues'

export const getAllLeaguesFromDb = async (
  client: Client
): Promise<League[] | DbError> => {
  const res = await getManyRows(
    `SELECT id, key, sport_id, name, description FROM leagues`,
    [],
    client
  )

  if (checkIfDbError(res) || checkIfLeagueArray(res)) {
    return res
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all leagues from db.',
      time: new Date().getTime(),
    }

    return dbError
  }
}
