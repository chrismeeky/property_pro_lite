import { Pool } from 'pg';
require('dotenv').config()
const pool = new Pool({
    connectionString: process.env.DB_URI,
  })

  export default pool;