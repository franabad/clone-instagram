import z from 'zod'

const userSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required'
  }),
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required'
  }),
  email: z.string({
    invalid_type_error: 'Email must be a string',
    required_error: 'Email is required'
  }).email({ message: 'Invalid email format' }),
  lastname: z.string({
    invalid_type_error: 'Lastname must be a string'
  }).optional()
})

export function validateUser (object) {
  return userSchema.safeParse(object)
}

export function validateModifyMovie (object) {
  return userSchema.partial().safeParse(object)
}
