require('dotenv').config();
const path = require('path');

const migrationsDirectory = path.join(__dirname, 'server/db/migrations');
const seedsDirectory = path.join(__dirname, 'server/db/seeds');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING || {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || 'postgres',
      database: process.env.PG_DB || 'symptom_logger',
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
