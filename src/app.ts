import Express from 'express'
import { configDotenv } from 'dotenv'
import { Client } from 'pg'
import { addRoutes } from './router'

configDotenv()

const app = Express()

const port = process.env.PORT ?? '8000'

const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

;(async () => {
  try {
    await client.connect()
  } catch (error) {
    console.error('Error while connecting db client :', error)
    process.exit()
  }

  addRoutes(app, client)

  app.listen(port, () => {
    console.log('App is running on port ' + port + ' !')
  })
})()
