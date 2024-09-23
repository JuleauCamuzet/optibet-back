import { Bet } from '../../types/db/bets'
import { Bookmaker } from '../../types/db/bookmakers'
import { League } from '../../types/db/leagues'
import { Move } from '../../types/db/moves'
import { Region } from '../../types/db/regions'
import { Sport } from '../../types/db/sports'
import { DashboardMove } from '../../types/pages/dashboard'

type Params = {
  bets: Bet[]
  moves: Move[]
  leagues: League[]
  sports: Sport[]
  regions: Region[]
  bookmakers: Bookmaker[]
}

export const formatDashboardMovesData = ({
  bets,
  bookmakers,
  leagues,
  moves,
  regions,
  sports,
}: Params): DashboardMove[] => {
    const dashboardMoves: DashboardMove[] = []

    moves.forEach((move) => {
      const moveLeague = leagues.find((l) => l.id === move.league_id)
      const moveSport = sports.find((s) => s.id === moveLeague?.sport_id)
      const moveBetA = bets.find((b) => b.id === move.bet_a_id)
      const moveBetB = bets.find((b) => b.id === move.bet_b_id)
      const moveBookmakerA = bookmakers.find(
        (b) => b.id === moveBetA?.bookmaker_id
      )
      const moveBookmakerB = bookmakers.find(
        (b) => b.id === moveBetB?.bookmaker_id
      )
      const moveRegion = regions.find((r) => r.id === moveBookmakerA?.region_id)

      if (
        moveLeague &&
        moveSport &&
        moveBetA &&
        moveBetB &&
        moveBookmakerA &&
        moveBookmakerB &&
        moveRegion
      ) {
        const dashboardMove: DashboardMove = {
          id: move.id,
          benefits: parseFloat(move.benefits),
          region: {
            id: moveRegion.id,
            name: moveRegion.name,
          },
          betA: {
            id: moveBetA.id,
            odd: parseFloat(moveBetA.odd),
            teamName: moveBetA.team_name,
            bookmaker: {
              id: moveBookmakerA.id,
              name: moveBookmakerA.name,
            },
          },
          betB: {
            id: moveBetB.id,
            odd: parseFloat(moveBetB.odd),
            teamName: moveBetB.team_name,
            bookmaker: {
              id: moveBookmakerB.id,
              name: moveBookmakerB.name,
            },
          },
          league: {
            id: moveLeague.id,
            name: moveLeague.name,
          },
          sport: {
            id: moveSport.id,
            name: moveSport.name,
          },
        }

        dashboardMoves.push(dashboardMove)
      }
    })

    return dashboardMoves
}
