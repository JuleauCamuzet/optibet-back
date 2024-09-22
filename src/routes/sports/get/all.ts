import { Express } from 'express'
import { Client } from 'pg'

import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'
import { getAllSportsRouteErrors } from '../../../types/errors/routes/sports/all'
import { getAllSports } from '../../../modules/db/sports/getAllSports'

export const getAllSportsRoute = (app: Express, client: Client) => {
  app.get('/sports', async (req, res) => {
    try {
      const result = await getAllSports(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send(getAllSportsRouteErrors.UNKNOWN)
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)
      res.status(400).send(getAllSportsRouteErrors.UNKNOWN)
      return
    }
  })
}
