const Pool = require('pg').Pool
// require('dotenv').config()

const pool = new Pool ({
  host: process.env.HOST,
  port: process.env.DBPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'checklistapp'
});

module.exports = pool