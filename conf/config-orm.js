const Knex = require('knex');
const Bookshelf = require('bookshelf');
const config = require('./config');

const dbConnection = {
  host: config[process.env.NODE_ENV].database.host,
  user: config[process.env.NODE_ENV].database.user,
  password: config[process.env.NODE_ENV].database.password,
  database: config[process.env.NODE_ENV].database.database,
  charset: 'utf8',
  pool: {
    min: 0,
    max: 7
  },
  acquireConnectionTimeout: 10000,
  debug: (process.env.NODE_ENV == 'development')
};

const params = {
  // You need one of the following:
  // npm install pg
  // npm install mysql
  // npm install mariasql
  // npm install sqlite3
  client: 'pg',
  connection: dbConnection
};

module.exports = {
  knex: Knex(params),
  bookshelf: Bookshelf(knex)
};