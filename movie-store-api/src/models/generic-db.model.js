const { Pool } = require("pg");

const query = async (db_config, query) => {
  try {
    const pool = new Pool(db_config);
    const result = await pool.query(query);
    pool.end(() => console.log("Pool has ended"));
    return result;
  } catch (err) {
    console.error(err);
    return new AppError(502, "Error while connecting to DB, please try later");
  }
};

module.exports = query;
