import { Client } from 'pg'

import { getManyRows } from '../../../helpers/db/get/many'
import {
  checkIfDbError,
  DbError,
  DbErrorCodeEnum,
} from '../../../types/errors/db'
import { checkIfBetArray } from '../../../types/db/bets'

export const getAllBetsFromDb = async (client: Client) => {
  const result = await getManyRows(
    `SELECT id, team_name, odd, bookmaker_id FROM bets`,
    [],
    client
  )

  if (checkIfDbError(result) || checkIfBetArray(result)) {
    return result
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all bets from db.',
      time: new Date().getTime(),
    }

    return dbError
  }
}
