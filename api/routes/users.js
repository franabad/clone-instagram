import { Router } from 'express'
import { validateUser, validateModifyUser } from '../schemas/users.js'
import db from '../db/db.js'
import { UserModel } from '../models/user.js'

export const usersRouter = Router()

// Get all users
usersRouter.get('/', async (req, res) => {
  const users = await UserModel.getAll(res)
  if (users) return res.status(200).json(users)
})

// Get user by username
usersRouter.get('/:username', async (req, res) => {
  const { username } = req.params
  const user = await UserModel.getByUsername(username, res)
  if (user) return res.status(200).json(user)
  if (user === undefined) return res.status(404).json({ error: 'User not found' })
})

// Insert a new user
usersRouter.post('/', async (req, res) => {
  const result = validateUser(req.body)
  if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })
  const newUser = await UserModel.create(result.data, res)
  if (newUser) return res.status(201).json(newUser)
  if (newUser === undefined) return res.status(409).json({ error: 'Username already exists' })
})

// Update user by username
usersRouter.patch('/:username', (req, res) => {
  const result = validateModifyUser(req.body)
  console.log(result.data)
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

// Delete user by username
