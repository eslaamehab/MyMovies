var express = require("express");
var router = express.Router();
// const User = require("../models/user.js");

/* GET login page as HOME page. */
router.get("/", function (req, res, next) {
  res.render("login", { layout: false });
});

/* GET homepage (after login). */
router.get("/home", function (req, res, next) {
  res.render("home");
});
/* GET Watch List page. */
router.get("/watch-list", function (req, res, next) {
  res.render("watch-list");
});
/* GET Search Results page. */
router.get("/search", function (req, res, next) {
  res.render("search");
});

//  render page of specefic category
/* GET action movies page. */
router.get("/action", function (req, res, next) {
  res.render("action");
});
/* GET comedy movies page. */
router.get("/comedy", function (req, res, next) {
  res.render("comedy");
});
/* GET romance movies page. */
router.get("/romance", function (req, res, next) {
  res.render("romance");
});

//  render page of specefic movie
/* GET The Hitman's Bodyguard movie page. */
router.get("/hitman", function (req, res, next) {
  res.render("actionMovies/hitman");
});
/* GET Snitch movie page. */
router.get("/snitch", function (req, res, next) {
  res.render("actionMovies/snitch");
});
/* GET Divergent movie page. */
router.get("/divergent", function (req, res, next) {
  res.render("actionMovies/divergent");
});
/* GET Baywatch movie page. */
router.get("/baywatch", function (req, res, next) {
  res.render("comedyMovies/baywatch");
});
/* GET Free Guy movie page. */
router.get("/freeguy", function (req, res, next) {
  res.render("comedyMovies/freeguy");
});
/* GET Red Notice movie page. */
router.get("/rednotice", function (req, res, next) {
  res.render("comedyMovies/rednotice");
});
/* GET Focus movie page. */
router.get("/focus", function (req, res, next) {
  res.render("romanceMovies/focus");
});
/* GET Date Night movie page. */
router.get("/datenight", function (req, res, next) {
  res.render("romanceMovies/datenight");
});
/* GET Purple Hearts movie page. */
router.get("/romanceMovies", function (req, res, next) {
  res.render("actionMovies/purplehearts");
});

/* Post search. */
router.post("/search", function (req, res) {
  //do something
});

module.exports = router;

// if (!req.body) {
//   res.status(400).send("request body is missing !");
// }
// res.json(req.body);
