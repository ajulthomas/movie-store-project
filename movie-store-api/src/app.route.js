const express = require("express");
const movie = require("./modules/movie/movie.route");

const router = express.Router();

router.route("/login").get((req, res) => {
  res.json({ message: "setup success" });
});

router.use("/movie", movie);

module.exports = router;
