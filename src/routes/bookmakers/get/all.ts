import { Express } from 'express'
import { Client } from 'pg'

import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'
import { getAllBookmakers } from '../../../modules/db/bookmakers/getAllBookmakers'
import { getAllBookmakersRouteErrors } from '../../../types/errors/routes/bookmakers/all'

export const getAllBookmakersRoute = (app: Express, client: Client) => {
  app.get('/bookmakers', async (req, res) => {
    try {
      const result = await getAllBookmakers(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send(getAllBookmakersRouteErrors.UNKNOWN)
        return
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)
      res.status(400).send(getAllBookmakersRouteErrors.UNKNOWN)
      return
    }
  })
}
