// default imports (not used in my app)
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// imports used
var express = require("express"); // 'express' is the package for implementing the web server
var path = require("path");
const { json } = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // place HTML files inside views folder & set public as folder for static files

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(bodyParser.json());
app.use(cors());
app.use(usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//module.exports = app;

// app.get("/", function (req, res) {
//   res.render("login");
// });
// app.post("/login", function (req, res) {
//   var userName = req.body.userName;
//   var passWord = req.body.password;
//   console.log(userName);
//   console.log(passWord);
// });

// Connect to DB on VS code if not done on MongoDB desktop
//  mongodb+srv://moviesDB:<password>@cluster0.zibyukw.mongodb.net/test
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

// How we start listening to the server on some port
if (process.env.PORT) {
  app.listen(process.env.PORT);
} else {
  app.listen(3000);
}
