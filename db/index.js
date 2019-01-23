const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);
module.exports = pool.connect()
  .catch((err) => { console.error(err); });
