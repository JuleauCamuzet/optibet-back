import { Express } from 'express'
import { Client } from 'pg'

import { addRegionsGetRoutes } from './get'

export const addRegionsRoutes = (app: Express, client: Client) => {
  addRegionsGetRoutes(app, client)
}
