import { Express } from 'express'
import { Client } from 'pg'

import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'
import { getAllLeaguesRouteErrors } from '../../../types/errors/routes/leagues/all'
import { getAllLeagues } from '../../../modules/db/leagues/getAllLeagues'

export const getAllLeaguesRoute = (app: Express, client: Client) => {
  app.get('/leagues', async (req, res) => {
    try {
      const result = await getAllLeagues(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send(getAllLeaguesRouteErrors.UNKNOWN)
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)
      res.status(400).send(getAllLeaguesRouteErrors.UNKNOWN)
      return
    }
  })
}
