const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// Create a new PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,     // Database username
  host: process.env.DB_HOST,     // Database host
  database: process.env.DB_NAME, // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: process.env.DB_PORT,     // PostgreSQL port (default 5432)
});

// Export the database connection so other files can use it
module.exports = pool;
