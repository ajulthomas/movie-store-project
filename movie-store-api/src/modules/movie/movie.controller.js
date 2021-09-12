const movieService = require("./movie.service");
const AppError = require("../error/app-error");

const getMovies = async (req, res) => {
  const movies = await movieService.fetchMovies();
  res.json(movies);
};

const getMovieById = (req, res, next) => {};

const addMovies = async (req, res, next) => {
  try {
    const movies = req.body.movies;
    const userId = req.body.user_id;
    if (movies.length > 0 && userId) {
      const result = await movieService.insertMovie(movies, userId);
      res.send({
        status: "success",
        movies: result,
      });
    } else {
      throw new AppError(400, "Invalid request. movies or user id missing.");
    }
  } catch (err) {
    console.error(err.stack);
    err instanceof AppError
      ? next(err)
      : next(new AppError(500, "Unable to process movie add request"));
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovies,
};
