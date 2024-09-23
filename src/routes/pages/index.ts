import { Express } from "express"
import { Client } from "pg"

import { addDashboardRoutes } from "./dashboard"

export const addPagesRoutes = (app: Express, client: Client) => {
  addDashboardRoutes(app, client)
}
