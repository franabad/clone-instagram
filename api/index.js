import express from 'express'
import db from './db/db.js'
// import cors from 'cors'
import { validateUser, validateModifyMovie } from './schemas/users.js'

const app = express()

app.disable('x-powered-by')

// app.use(cors({
//   origin: (origin, callback) => {
//     const ACCEPTED_ORIGINS = [
//       'http://localhost:3000',
//       'https://localhost:3001'
//     ]
//     if (ACCEPTED_ORIGINS.includes(origin)) {
//       return callback(null, true)
//     }
//     if (!origin) {
//       return callback(null, true)
//     }
//     return callback(new Error('Not allowed by CORS'))
//   }
// }))
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     req.body = data
//     next()
//   })
// })

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/users', (req, res) => {
  db.query('select * from users')
    .then((users) => {
      res.status(200).json(users.rows)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Error getting users' })
    })
})

// Get a user by username
app.get('/users/:username', (req, res) => {
  const { username } = req.params
  db.query('select username, name, lastname, n_posts, n_followers, n_following, avatar_url, bio from users where username = $1', [username])
    .then((data) => {
      if (data.rows.length === 0) return res.status(404).json({ error: 'User not found' })
      res.status(200).json(data.rows[0])
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Error getting user' })
    })
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

app.post('/users', (req, res) => {
  const result = validateUser(req.body)
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  db.query('INSERT INTO users (username, email, name) VALUES ($1, $2, $3)', [result.data.username, result.data.email, result.data.name])
    .then(() => {
      res.status(201).json(result.data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Error creating user' })
    })
})

app.patch('/users/:username', (req, res) => {
  const result = validateModifyMovie(req.body)
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const { username } = req.params
  db.query('select * from users where username = $1', [username])
    .then((data) => {
      if (data.rows.length === 0) return res.status(404).json({ error: 'User not found' })
      db.query('update users set lastname = $1 where username = $2', [result.data.lastname, username])
        .then(() => {
          const updatedUser = {
            ...data.rows[0],
            lastname: result.data.lastname
          }
          res.status(201).json(updatedUser)
        })
        .catch((err) => {
          console.error(err)
          res.status(500).json({ error: 'Error updating user' })
        })
    })
    .catch((err, res) => {
      console.error(err)
      res.status(500).json({ error: 'Error updating user' })
    })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

const port = process.env.PORT ?? 1234

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
