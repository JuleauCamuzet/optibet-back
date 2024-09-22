import { Express } from 'express'
import { Client } from 'pg'

import { getAllMoves } from '../../../modules/db/moves/getAllMoves'
import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'
import { getAllMovesRouteErrors } from '../../../types/errors/routes/moves/all'

export const getAllMovesRoute = (app: Express, client: Client) => {
  app.get('/moves', async (req, res) => {
    try {
      const result = await getAllMoves(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send(getAllMovesRouteErrors.UNKNOWN)
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)

      res.status(400).send(getAllMovesRouteErrors.UNKNOWN)
      return
    }
  })
}
