const { Pool } = require('pg');

const pool = new Pool(config);

module.exports = client;