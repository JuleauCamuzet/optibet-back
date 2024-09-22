import { Express } from 'express'
import { Client } from 'pg'

import { getAllBookmakersRoute } from './all'

export const addBookmakersGetRoutes = (app: Express, client: Client) => {
  getAllBookmakersRoute(app, client)
}
