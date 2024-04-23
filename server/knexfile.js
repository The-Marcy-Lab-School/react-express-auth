require('dotenv').config();
const path = require('path');

const migrationsDirectory = path.join(__dirname, 'db/migrations');
const seedsDirectory = path.join(__dirname, '/db/seeds');

/* 
We'll use environment variables to set the Postgres username and password
so we don't share that information online.

When we deploy in "production", we'll provide a PG_CONNECTION_STRING
*/

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || 'postgres',
      database: process.env.PG_DB || 'postgres',
    },
    migrations: {
      directory: migrationsDirectory,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: migrationsDirectory,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
};
