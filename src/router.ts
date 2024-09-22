import { Express } from 'express'
import { Client } from 'pg'

import { addRegionsRoutes } from './routes/regions'
import { addMovesRoutes } from './routes/moves'
import { addBetsRoutes } from './routes/bets'
import { addSportsRoutes } from './routes/sports'
import { addLeaguesRoutes } from './routes/leagues'

export const addRoutes = (app: Express, client: Client) => {
  addRegionsRoutes(app, client)
  addMovesRoutes(app, client)
  addBetsRoutes(app, client)
  addSportsRoutes(app, client)
  addLeaguesRoutes(app, client)
}
