import { Express } from 'express'
import { Client } from 'pg'

import { getAllMovesRoute } from './all'

export const addMovesGetRoutes = (app: Express, client: Client) => {
  getAllMovesRoute(app, client)
}
