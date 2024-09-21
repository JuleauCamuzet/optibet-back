import { Express } from 'express'
import { Client } from 'pg'
import { getAllMoves } from '../../../modules/db/moves/getAllMoves'
import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'

export const getAllMovesRoute = (app: Express, client: Client) => {
  app.get('/moves', async (req, res) => {
    try {
      const result = await getAllMoves(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send({
          code: 'UNKNOWN',
          message: 'An unknown error has occured',
        })
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)

      res.status(400).send({
        code: 'UNKNOWN',
        message: 'An unknown error has occured',
      })
      return
    }
  })
}
