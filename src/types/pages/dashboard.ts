type DashboardBookmaker = {
  id: string
  name: string
}

type DashboardBet = {
  id: string
  odd: number
  teamName: string
  bookmaker: DashboardBookmaker
}

type DashboardRegion = {
  id: string
  name: string
}

type DashboardLeague = {
  id: string
  name: string
}

type DashboardSport = {
  id: string
  name: string
}

export type DashboardMove = {
  id: string
  benefits: number
  region: DashboardRegion
  betA: DashboardBet
  betB: DashboardBet
  league: DashboardLeague
  sport: DashboardSport
}

export type DashboardData = {
  moves: DashboardMove[]
}
