const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET ALL movie listing. */
router.get("/", async (req, res, next) => {
  res.send("ALL MOVIES");
});

/* New movie route. */
router.get("/new", function (req, res, next) {
  //   res.render("movies/new", { movie: new Movie() });
  res.send("NEW MOVIE");
});

/* Create movie route. */
router.post("/", async (req, res, next) => {
  // create new movie schema and send it to DB
  res.send("CREATE MOVIES");
});

module.exports = router;
