const express = require("express");

const router = express.Router();

router.route("/login").get((req, res) => {
  res.json({ message: "setup success" });
});

module.exports = router;
