const movieService = require("./../services/movie.service");

const getMovies = async (req, res) => {
  const movies = await movieService.fetchMovies();
  res.json(movies);
};

const getMovieById = (req, res) => {};

const addMovies = (req, res) => {};

module.exports = {
  getMovies,
  getMovieById,
  addMovies,
};
