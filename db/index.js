const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

pool.on('error', (err) => { console.error(err); });

module.exports = pool;
