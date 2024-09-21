import { Express } from 'express'
import { Client } from 'pg'

import { getAllRegions } from '../../../modules/db/regions/getAllRegions'
import { checkIfDbError } from '../../../types/errors/db'
import { dbErroToLog } from '../../../helpers/logs/dbErrorToLog'

export const getRegionsRoute = (app: Express, client: Client) => {
  app.get('/regions', async (req, res) => {
    try {
      const result = await getAllRegions(client)

      if (checkIfDbError(result)) {
        dbErroToLog(result)

        res.status(400).send({
          code: 'UNKNOWN',
          message: 'An unknown error has occured.',
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
