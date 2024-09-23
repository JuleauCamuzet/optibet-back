import { Client } from 'pg'

import { getAllBetsFromDb } from '../../../db/bets/get/all'
import { getAllLeaguesFromDb } from '../../../db/leagues/get/all'
import { getAllBookmakersFromDb } from '../../../db/bookmakers/get/all'
import { getAllSportsFromDb } from '../../../db/sports/get/all'
import { getAllRegionsFromDb } from '../../../db/regions/get/all'
import { getAllMovesFromDb } from '../../../db/moves/get/all'
import { checkIfDbError, DbError } from '../../../types/errors/db'
import { formatDashboardMovesData } from '../../../helpers/dashboard/formatDashboardMovesData'
import { Region } from '../../../types/db/regions'
import { DashboardMove } from '../../../types/pages/dashboard'

export const getDashboardMoves = async (
  sportFilter: string | undefined,
  regionFilter: string | undefined,
  client: Client
): Promise<DashboardMove[] | DbError> => {
  const bets = await getAllBetsFromDb(client)
  if (checkIfDbError(bets)) {
    return bets
  }

  const leagues = await getAllLeaguesFromDb(client)
  if (checkIfDbError(leagues)) {
    return leagues
  }

  const bookmakers = await getAllBookmakersFromDb(client)
  if (checkIfDbError(bookmakers)) {
    return bookmakers
  }

  const sports = await getAllSportsFromDb(client)
  if (checkIfDbError(sports)) {
    return sports
  }

  const regions = await getAllRegionsFromDb(client)
  if (checkIfDbError(regions)) {
    return regions
  }

  const moves = await getAllMovesFromDb(client)
  if (checkIfDbError(moves)) {
    return moves
  }

  let dashboardMoves = formatDashboardMovesData({
    bets,
    bookmakers,
    leagues,
    moves,
    regions,
    sports,
  })

  if (regionFilter) {
    dashboardMoves = dashboardMoves.filter(move => {
      const regionMove: Region | undefined = regions.find(region => region.id === move.region.id)

      return regionMove?.key === regionFilter
    })
  }

  if (sportFilter) {
    dashboardMoves = dashboardMoves.filter(move => move.sport.id === sportFilter)
  }

  return dashboardMoves
}
