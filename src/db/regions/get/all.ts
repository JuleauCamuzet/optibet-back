import { Client } from 'pg'

import { getManyRows } from '../../../helpers/db/get/many'
import {
  checkIfDbError,
  DbError,
  DbErrorCodeEnum,
} from '../../../types/errors/db'
import { checkIfRegionArray, Region } from '../../../types/db/regions'

export const getAllRegionsFromDb = async (
  client: Client
): Promise<Region[] | DbError> => {
  const res = await getManyRows(`SELECT * FROM regions`, [], client)

  if (checkIfDbError(res) || checkIfRegionArray(res)) {
    return res
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all regions from db.',
      time: new Date().getTime(),
    }

    return dbError
  }
}
