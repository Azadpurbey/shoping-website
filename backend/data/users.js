import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Azad',
    email: 'azad@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ashish',
    email: 'ashish@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
