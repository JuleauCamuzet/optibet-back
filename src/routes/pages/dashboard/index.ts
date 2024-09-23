import { Express } from "express"
import { Client } from "pg"

import { getDashboardMovesRoute } from "./getDashboardMoves"

export const addDashboardRoutes = (app: Express, client: Client) => {
  getDashboardMovesRoute(app, client)
}
