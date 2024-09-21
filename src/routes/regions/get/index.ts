import { Express } from 'express'
import { Client } from 'pg'

import { getRegionsRoute } from './all'

export const addRegionsGetRoutes = (app: Express, client: Client) => {
  getRegionsRoute(app, client)
}
