var express = require("express");
var router = express.Router();
var User = require("../models/user");

const { validateRegister, validateLogin } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render(`login`, { layout: false });
});

/* GET registration page. */
router.get("/register", function (req, res, next) {
  res.render("register", { layout: false });
});

/* Post register route,
   1- validate
   2- Hash password
   3- create new user schema
   4- send it to DB*/
router.post("/register", async (req, res, next) => {
  // validate
  try {
    const { error } = validateRegister(req.body);
    if (error) {
      res.render("register", {
        user: req.body,
        errorMessage:
          "error registering user!    :-      " + error.details[0].message,
      });
      return;
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user schema
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      registerdate: req.body.registerdate,
    });
    // send user to DB
    const newUser = await user.save();
    // res.redirect("user/${newUser.id}");
    res.render("login", {
      errorMessage: "User Created Successfully!",
    });
  } catch {
    res.render("register", {
      user: req.body,
      errorMessage:
        "Email/username already exist!  Try different credentials.. ",
    });
  }
});

/* Post login. 
    1- validate
    2- check if username exists in DB
    3- check if password is valid
    4- create JSON web token */
router.post("/login", async (req, res, next) => {
  const { error } = validateLogin(req.body);
  const user = await User.findOne({ username: req.body.username });
  validPassword = await bcrypt.compare(req.body.password, user.password);
  if (error || !user || !validPassword) {
    res.render("login", {
      user: req.body,
      errorMessage: "Login error! Username or Password are invalid",
    });
    return;
  }
  // create and assign JWT
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  //   res.header("auth-token", token).send(token);
  res.redirect("/home");
});

module.exports = router;
