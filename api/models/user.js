import db from '../db/db.js'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UserModel {
  static async getAll (res) {
    try {
      const users = await db.query('select * from users')
      return users.rows
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Error getting users' })
    }
  }

  static async getByUsername (username, res) {
    try {
      const user = await db.query('select * from users where username = $1', [username])
      return user.rows[0]
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Error getting user' })
      return null
    }
  }

  static async create (user, res) {
    try {
      await db.query('INSERT INTO users (username, email, name) VALUES ($1, $2, $3)', [user.username, user.email, user.name])
      return user
    } catch (err) {
      console.error(err)
      if (err.code === '23505') {
        return undefined
      }
      res.status(500).json({ error: 'Error creating user' })
      return null
    }
  }

  static async update (username, data, res) {
    try {
      const user = await db.query('select * from users where username = $1', [username])
      if (!user) return undefined
      await db.query('update users set lastname = $1 where username = $2', [data, username])
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Error updating user' })
      return null
    }
  }
}
