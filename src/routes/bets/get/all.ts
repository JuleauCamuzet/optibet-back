import { Express } from 'express'
import { Client } from 'pg'

import { getAllBets } from '../../../modules/db/bets/getAllBets'
import { checkIfDbError } from '../../../types/errors/db'
import { getAllBetsRouteErrors } from '../../../types/errors/routes/bets/all'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'

export const getAllBetsRoute = (app: Express, client: Client) => {
  app.get('/bets', async (req, res) => {
    try {
      const result = await getAllBets(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send(getAllBetsRouteErrors.UNKNOWN)
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)
      res.status(400).send(getAllBetsRouteErrors.UNKNOWN)
      return
    }
  })
}
