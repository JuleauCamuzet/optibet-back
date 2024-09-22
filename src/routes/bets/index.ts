import { Express } from 'express'
import { Client } from 'pg'

import { addBetsGetRoutes } from './get'

export const addBetsRoutes = (app: Express, client: Client) => {
  addBetsGetRoutes(app, client)
}
