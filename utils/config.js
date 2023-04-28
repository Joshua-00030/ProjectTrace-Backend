require('dotenv').config()

require('dotenv').config()

PORT = process.env.PORT
PGPORT = process.env.PGPORT
POSTGRES_URI = process.env.POSTGRES_URI
DATABASE = process.env.DATABASE
PASSWORD = process.env.PASSWORD
USER = process.env.USER
module.exports = {
  PORT,
  PGPORT,
  POSTGRES_URI,
  DATABASE,
  PASSWORD,
  USER
}