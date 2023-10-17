import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Client } = pg

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS
})

await db.connect((err) => {
  if (err !== null) {
    console.error('Error connecting to database')
    throw err
  } else {
    console.log('Database connected')
  }
})

export default db
