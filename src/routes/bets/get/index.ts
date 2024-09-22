import { Express } from 'express'
import { Client } from 'pg'

import { getAllBetsRoute } from './all'

export const addBetsGetRoutes = (app: Express, client: Client) => {
  getAllBetsRoute(app, client)
}
