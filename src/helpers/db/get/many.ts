import { Client } from 'pg'
import { runQuery } from '../runQuery'

import { DbError, DbErrorCodeEnum } from '../../../types/errors/db'

export const getManyRows = async (
  query: string,
  values: unknown[],
  client: Client
): Promise<unknown[] | DbError> => {
  const res = await runQuery(query, values, client)

  if (res) {
    return res.rows
  } else {
    const dbError: DbError = {
      code: DbErrorCodeEnum.GET_MANY_ROWS,
      time: new Date().getTime(),
      message: 'An error has occured while getting a many rows of the db.',
    }

    return dbError
  }
}
