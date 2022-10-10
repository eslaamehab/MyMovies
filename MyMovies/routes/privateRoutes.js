const jwt = require("jsonwebtoken");

// middleware function which can be added to any route we want

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send("Access Denied!");
  }
  try {
    const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verifiedToken;
    next();
  } catch {
    res.status(400).send("Invalid Token!");
  }
};
