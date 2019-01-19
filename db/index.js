const { Pool, Client } = require('pg');
const config = require('./config.js');

///// OPTIMIZED
const pool = new Pool(config);
pool;
module.exports = pool;

///// BASELINE 
// const client = new Client(config);
// client.connect();
// module.exports = client;
