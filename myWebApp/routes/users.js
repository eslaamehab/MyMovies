var express = require("express");
var router = express.Router();
var userCredential = require("../models/credential");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// create new user
router.post("/register", async function (req, res) {
  if (!req.body) {
    return res.status(400).send("request body is missing !");
  }
  // const credential = new Credential({
  //   userName: req.body.user,
  //   password: req.body.password,
  //   email: req.body.email,
  // });
  // try {
  //   const savedUser = await credential.save();
  //   res.json(savedUser);
  // } catch (err) {
  //   res.json({ message: err });
  // }

  const user = new userCredential(req.body);
  user
    .save()
    .then((doc) => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
