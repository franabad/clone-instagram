import express, { json } from 'express'
import db from './db/db.js'
import { usersRouter } from './routes/users.js'
// import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
// app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// Get posts by user id
app.get('/feed/:username', (req, res) => {
  db.query('SELECT posts.* FROM posts JOIN users ON users.id = posts.upload_by WHERE users.username = $1', [req.params.username])
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: 'Error getting user' })
    })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
