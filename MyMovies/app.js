// default imports
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const express = require("express");
const path = require("path");
const { json } = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
const { constants } = require("buffer");
const expressEjsLayouts = require("express-ejs-layouts");
//require("dotenv/config");
require("dotenv").config();

// import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const actorsRouter = require("./routes/actors");
const moviesRouter = require("./routes/movies");
const authenticationRouter = require("./routes/authentication");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(express.static(path.join(__dirname, "public"))); // place HTML files inside views folder & set public as folder for static files
//app.use(express.static("public"));

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(cookieParser());
app.use(expressEjsLayouts);

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/actors", actorsRouter);
app.use("/movies", moviesRouter);
app.use("/api/user", authenticationRouter);
app.use("/api/actors", actorsRouter);

// app.use("/register", usersRouter);
app.use(bodyParser.json());
app.use(cors());
//app.use(usersRouter);

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

// Connect to DB on VS code if not done on MongoDB desktop
// url: mongodb+srv://moviesDB:<password>@cluster0.zibyukw.mongodb.net/test
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const dbConnection = mongoose.connection;
dbConnection.on("error", (error) => console.error(error));
dbConnection.once("open", () => console.log("Connected to Mongoose!"));

// How we start listening to the server on some port
if (process.env.PORT) {
  app.listen(process.env.PORT);
} else {
  app.listen(3000);
}

//module.exports = app;
