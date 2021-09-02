const { Pool } = require("pg");

const query = async (db_config, query) => {
  const pool = new Pool(db_config);
  const result = await pool.query(query);
  pool.end(() => console.log("Pool has ended"));
  return result;
};

module.exports = query;
