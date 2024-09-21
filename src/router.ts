import { Express } from 'express'
import { Client } from 'pg'

import { addRegionsRoutes } from './routes/regions'
import { addMovesRoutes } from './routes/moves'

export const addRoutes = (app: Express, client: Client) => {
  addRegionsRoutes(app, client)
  addMovesRoutes(app, client)
}
