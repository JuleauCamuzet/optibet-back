import { Express } from 'express'
import { Client } from 'pg'

import { getAllSportsRoute } from './all'

export const addSportsGetRoutes = (app: Express, client: Client) => {
  getAllSportsRoute(app, client)
}
