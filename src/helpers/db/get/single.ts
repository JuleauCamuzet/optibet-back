import { Client } from 'pg'
import { runQuery } from '../runQuery'

import { DbError, DbErrorCodeEnum } from '../../../types/errors/db'

export const getSingleRow = async (
  query: string,
  values: unknown[],
  client: Client
): Promise<unknown | DbError> => {
  const res = await runQuery(query, values, client)

  if (res) {
    return res.rows[0]
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.GET_SINGLE_ROW,
      time: new Date().getTime(),
      message: 'An error has occured while getting a single row of the db.',
    }

    return dbError
  }
}
