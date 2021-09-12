const executeQuery = require("./../../models/movie-db/movie-db.model");
const format = require("pg-format");
const AppError = require("../error/app-error");

const fetchMovies = async () => {
  try {
    const movies = await executeQuery(
      "SELECT movie_id, movie_name, certification, imdb_rating, release_date, poster_path, synopsis FROM movies"
    );
    return movies.rows;
  } catch (error) {
    console.error("error while querying:", error);
  }
};

const insertMovie = async (movies, userId) => {
  console.log(movies, userId);
  let values = [];
  for (let movie of movies) {
    movie.updated_by = userId;
    movie.last_updated = new Date();
    values.push(Object.values(movie));
  }
  const query = format(
    `INSERT INTO movies
      (movie_name, certification, imdb_rating, release_date, poster_path, synopsis, updated_by, last_updated)
      VALUES %L RETURNING movie_id, movie_name`,
    values
  );
  console.log(query);
  const result = await executeQuery(query);
  return result.rows;
};

const updateMovie = (id) => {};
const deleteMovie = (id) => {};

module.exports = {
  fetchMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
};
