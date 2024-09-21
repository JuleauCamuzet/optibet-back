export enum DbErrorCodeEnum {
  GET_SINGLE_ROW = 'DB_ERROR_GET_SINGLE_ROW',
  GET_MANY_ROWS = 'DB_ERROR_GET_MANY_ROWS',
  WRONG_TYPE = 'DB_ERROR_WRONG_RESULT_TYPE',
}

export type DbError = {
  code: string
  time: number
  message: string
}

const checkIfDbErrorEnum = (val: any): val is DbErrorCodeEnum => {
  return val && Object.values(DbErrorCodeEnum).includes(val)
}

export const checkIfDbError = (val: any): val is DbError => {
  return (
    val &&
    val.code !== undefined &&
    checkIfDbErrorEnum(val.code) &&
    val.time !== undefined &&
    typeof val.time === 'number' &&
    val.message !== undefined &&
    typeof val.message === 'string'
  )
}
