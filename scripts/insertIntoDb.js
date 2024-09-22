const { Client } = require('pg')
const { configDotenv } = require('dotenv')

const { consoleGreen, consoleRed } = require('./tools/consoleColor')
const { getSportsData } = require('./helpers/getSportsData')
const { getLeaguesData } = require('./helpers/getLeaguesData')
const { getRegionsData } = require('./helpers/getRegionsData')
const { getBookmakersData } = require('./helpers/getBookmakersData')
const { getBetsData } = require('./helpers/getBetsData')
const { getMovesData } = require('./helpers/getMovesData')

configDotenv()

const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

;(async () => {
  await client.connect()

  try {
    console.log('Filling sports table...')

    const sportsData = getSportsData()

    await Promise.all(
      sportsData.map(async (sport) => {
        return client.query(
          `
                INSERT INTO sports (
                    id,
                    name
                ) VALUES (
                    $1, $2
                );
            `,
          [sport.id, sport.name]
        )
      })
    )

    consoleGreen('Table sports filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table sports :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    console.log('Filling leagues table...')

    const leaguesData = getLeaguesData()

    await Promise.all(
      leaguesData.map((league) => {
        return client.query(
          `
            INSERT INTO leagues (
                id,
                key,
                sport_id,
                name,
                description
            ) VALUES (
                $1, $2, $3, $4, $5
            )
            `,
          [
            league.id,
            league.key,
            league.sport_id,
            league.name,
            league.description,
          ]
        )
      })
    )

    consoleGreen('Table leagues filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table leagues :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    console.log('Filling regions table...')

    const regionsData = getRegionsData()

    await Promise.all(
      regionsData.map((region) => {
        return client.query(
          `
            INSERT INTO regions (
                id,
                name,
                key
            ) VALUES (
                $1, $2, $3
            )
            `,
          [region.id, region.name, region.key]
        )
      })
    )

    consoleGreen('Table regions filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table regions :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    console.log('Filling table bookmakers')

    const bookmakersData = getBookmakersData()

    await Promise.all(
      bookmakersData.map((bookmaker) => {
        return client.query(
          `
                INSERT INTO bookmakers (
                    id,
                    name,
                    region_id,
                    key
                ) VALUES (
                    $1, $2, $3, $4
                )
                `,
          [bookmaker.id, bookmaker.name, bookmaker.region_id, bookmaker.key]
        )
      })
    )

    consoleGreen('Table bookmakers filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table bookmakers :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    console.log('Filling table bets')

    const betsData = getBetsData()

    await Promise.all(
      betsData.map((bet) => {
        return client.query(
          `
                INSERT INTO bets (
                    id,
                    team_name,
                    odd,
                    bookmaker_id
                ) VALUES (
                    $1, $2, $3, $4
                );
                `,
          [bet.id, bet.team_name, bet.odd, bet.bookmaker_id]
        )
      })
    )

    consoleGreen('Table bets filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table bets :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    console.log('Filling table moves')

    const movesData = getMovesData()

    await Promise.all(
      movesData.map((move) => {
        return client.query(
          `
                INSERT INTO moves (
                    id,
                    date,
                    bet_a_id,
                    bet_b_id,
                    benefits
                ) VALUES (
                    $1, $2, $3, $4, $5
                );
                `,
          [move.id, move.date, move.bet_a_id, move.bet_b_id, move.benefits]
        )
      })
    )

    consoleGreen('Table moves filled successfuly')
  } catch (error) {
    consoleRed('Error while filling table moves :')
    console.error(error)
    await client.end()
    process.exit()
  }

  await client.end()
})()
