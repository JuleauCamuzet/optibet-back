import { Express } from 'express'
import { Client } from 'pg'

import { addMovesGetRoutes } from './get'

export const addMovesRoutes = (app: Express, client: Client) => {
  addMovesGetRoutes(app, client)
}
