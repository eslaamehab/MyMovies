var express = require("express");
var router = express.Router();

/* GET home page (login). */
router.get("/", function (req, res, next) {
  res.render("login");
});
/* GET registration page. */
router.get("/register", function (req, res, next) {
  res.render("register");
});
/* GET registration page. */
router.get("/register", function (req, res, next) {
  res.render("register");
});
/* GET homepage (after login). */
router.get("/homepage", function (req, res, next) {
  res.render("homepage");
});

/* Post register. */
router.post("/register", function (req, res) {
  var userName = req.body.user;
  var passWord = req.body.password;
  //do something
});
/* Post register. */
router.post("/login", function (req, res) {
  var userName = req.body.user;
  var passWord = req.body.password;
  //do something
});
router.post("/search", function (req, res) {
  //do something
});

module.exports = router;
