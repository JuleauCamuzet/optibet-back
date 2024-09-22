import { Express } from 'express'
import { Client } from 'pg'

import { addSportsGetRoutes } from './get'

export const addSportsRoutes = (app: Express, client: Client) => {
  addSportsGetRoutes(app, client)
}
