const { Client } = require('pg')
const { configDotenv } = require('dotenv');

const { consoleGreen, consoleRed } = require('./tools/consoleColor');

configDotenv()

const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

;(async () => {
  await client.connect()

  try {
    await client.query(`
        DROP SCHEMA public CASCADE;
        CREATE SCHEMA public;
    `)

    consoleGreen('Dropped all tables !')
  } catch (error) {
    consoleRed('Error while dropping all tables :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS sports (
            id VARCHAR PRIMARY KEY,
            name VARCHAR,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `)

    consoleGreen('Tables sports created !')
  } catch (error) {
    consoleRed('Error while creating sports table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS leagues (
            id VARCHAR PRIMARY KEY,
            key VARCHAR,
            sport_id VARCHAR,
            name VARCHAR,
            description VARCHAR,
            created_at TIMESTAMP DEFAULT NOW(),
            FOREIGN KEY (sport_id) REFERENCES sports(id)
        );
    `)

    consoleGreen('Tables leagues created !')
  } catch (error) {
    consoleRed('Error while creating leagues table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS regions (
          id VARCHAR PRIMARY KEY,
          key VARCHAR,
          name VARCHAR
        );
      `)

    consoleGreen('Table regions created !')
  } catch (error) {
    consoleRed('Error while creating regions table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS bookmakers (
            id VARCHAR PRIMARY KEY,
            name VARCHAR,
            key VARCHAR,
            region_id VARCHAR,
            created_at TIMESTAMP DEFAULT NOW(),
            FOREIGN KEY (region_id) REFERENCES regions(id)
        );
    `)

    consoleGreen('Tables bookmakers created !')
  } catch (error) {
    consoleRed('Error while creating bookmakers table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS bets (
            id VARCHAR PRIMARY KEY,
            team_name VARCHAR,
            odd NUMERIC,
            bookmaker_id VARCHAR,
            created_at TIMESTAMP DEFAULT NOW(),
            FOREIGN KEY (bookmaker_id) REFERENCES bookmakers(id)
        );
    `)

    consoleGreen('Tables bets created !')
  } catch (error) {
    consoleRed('Error while creating bets table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS moves (
            id VARCHAR PRIMARY KEY,
            date TIMESTAMP,
            bet_a_id VARCHAR,
            bet_b_id VARCHAR,
            benefits NUMERIC,
            created_at TIMESTAMP DEFAULT NOW(),
            FOREIGN KEY (bet_a_id) REFERENCES bets(id),
            FOREIGN KEY (bet_b_id) REFERENCES bets(id)
        );
    `)

    consoleGreen('Tables moves created !')
  } catch (error) {
    consoleRed('Error while creating moves table :')
    console.error(error)
    await client.end()
    process.exit()
  }

  await client.end()
})()
