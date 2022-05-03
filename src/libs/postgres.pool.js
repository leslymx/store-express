const { Pool } = require('pg');
const config = require('./config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// NORMALMENTE ME DAN UNA URL DE CONEXION
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

/**
 * version anterior
 * const pool = new Pool({
  host: dbHost,
  port: 5432,
  max: 10,
  user: 'postgres',
  password: 'postgres',
  database: 'store_platzi'
});
 */


module.exports = pool;
