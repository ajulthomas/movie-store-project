const movieService = require("./../services/movie.service");

const getMovies = async (req, res) => {
  const movies = await movieService.fetchMovies();
  res.json(movies);
};

const getMovieById = (req, res) => {};

const addMovies = (req, res) => {
  const movies = req.body.movies;
  const userId = req.body.user_id;
  if (movies.length > 0 && userId) {
  } else {
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovies,
};
