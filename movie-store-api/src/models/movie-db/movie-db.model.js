const runQuery = require("../generic-db.model");
const movieDBConfig = require("./movie-db.config");

const executeQuery = (query) => {
  return runQuery(movieDBConfig, query).then((result) => result);
};

module.exports = executeQuery;
