import { Express } from 'express'
import { Client } from 'pg'

import { addLeaguesGetRoutes } from './get'

export const addLeaguesRoutes = (app: Express, client: Client) => {
  addLeaguesGetRoutes(app, client)
}
