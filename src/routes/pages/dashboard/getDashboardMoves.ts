import { Express } from "express"
import { Client } from "pg"

import { getDashboardMoves } from "../../../modules/pages/dashboard/getDashboardMoves";
import { checkIfDbError } from "../../../types/errors/db";
import { getDashboardMovesRouteErrors } from "../../../types/errors/routes/pages/dashboard/getDashboardMoves";

export const getDashboardMovesRoute = (app: Express, client: Client) => {
  app.get('/pages/dashboard/moves', async (req, res) => {
    try {
      const regionFilter = req.query.region
      const sportFilter = req.query.sport

      if (regionFilter && typeof regionFilter !== 'string') {
        res.status(400).send(getDashboardMovesRouteErrors.WRONG_REGION_FITLER_TYPE)
        return
      }

      if (sportFilter && typeof sportFilter !== 'string') {
        res.status(400).send(getDashboardMovesRouteErrors.WRONG_SPORT_FITLER_TYPE)
        return
      }

      const result = await getDashboardMoves(sportFilter, regionFilter, client)

      if (checkIfDbError(result)) {
        res.status(400).send(getDashboardMovesRouteErrors.UNKNOWN)
      }

      res.status(200).send(result)
      return
    } catch (error) {
      console.error(error)

      res.status(400).send(getDashboardMovesRouteErrors.UNKNOWN)
      return
    }
  })
}
