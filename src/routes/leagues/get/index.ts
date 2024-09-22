import { Express } from 'express'
import { Client } from 'pg'

import { getAllLeaguesRoute } from './all'

export const addLeaguesGetRoutes = (app: Express, client: Client) => {
  getAllLeaguesRoute(app, client)
}
