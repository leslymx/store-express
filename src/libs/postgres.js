const { Client } = require('pg');

getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'store_platzi'
  });

  await client.connect();
  return client;
}


module.exports = getConnection
