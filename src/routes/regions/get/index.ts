import { Express } from 'express'
import { Client } from 'pg'

import { getAllRegionsRoute } from './all'

export const addRegionsGetRoutes = (app: Express, client: Client) => {
  getAllRegionsRoute(app, client)
}
