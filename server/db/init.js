require('dotenv').config();
const pool = require('./pool');

const schemaSql = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
`;

async function initializeDatabase() {
  try {
    await pool.query(schemaSql);
    console.log('Database initialized.');
  } finally {
    await pool.end();
  }
}

initializeDatabase().catch((error) => {
  console.error('Failed to initialize database.', error);
  process.exit(1);
});
