import express from 'express'
import db from './db/db.js'

const app = express()
const port = 3001

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  db.query(`
    select * from users
  `)
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
  res.header('Access-Control-Allow-Origin', '*')
  db.query('select username, name, lastname, n_posts, n_followers, n_following, avatar_url, bio from users where username = $1', [req.params.username])
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Error getting user' })
    })
})

// Get posts by user id
app.get('/feed/:username', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  db.query('SELECT posts.* FROM posts JOIN users ON users.id = posts.upload_by WHERE users.username = $1', [req.params.username])
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error getting user' })
      console.log(err)
      throw err
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
