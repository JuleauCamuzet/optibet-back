import { Client } from "pg"

import { getManyRows } from "../../../helpers/db/get/many"
import { checkIfDbError, DbError, DbErrorCodeEnum } from "../../../types/errors/db"
import { checkIfMoveArray, Move } from "../../../types/db/moves"

export const getAllMovesFromDb = async (client: Client): Promise<Move[] | DbError> => {
  const result = await getManyRows(`SELECT * FROM moves`, [], client)

  if (checkIfDbError(result) || checkIfMoveArray(result)) {
    return result
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.WRONG_TYPE,
      message: 'Wrong result type while getting all moves from db.',
      time: new Date().getTime()
    }

    return dbError
  }
}
