const { Pool, Client } = require('pg');
const config = require('./config.js');

// const pool = new Pool(config);
// module.exports = pool.connect();

const client = new Client(config);
client.connect();
module.exports = client;
