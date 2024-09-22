import { Client } from 'pg'

import { getManyRows } from '../../../helpers/db/get/many'
import {
  checkIfDbError,
  DbError,
  DbErrorCodeEnum,
} from '../../../types/errors/db'
import { checkIfSportArray } from '../../../types/db/sports'

export const getAllSportsFromDb = async (client: Client) => {
  const result = await getManyRows(`SELECT id, name FROM sports`, [], client)

  if (checkIfDbError(result) || checkIfSportArray(result)) {
    return result
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all sports from db.',
      time: new Date().getTime(),
    }

    return dbError
  }
}
