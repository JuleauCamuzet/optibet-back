import { Express } from 'express'
import { Client } from 'pg'

import { addBookmakersGetRoutes } from './get'

export const addBookmakersRoutes = (app: Express, client: Client) => {
  addBookmakersGetRoutes(app, client)
}
