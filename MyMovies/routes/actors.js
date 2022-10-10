const express = require("express");
const router = express.Router();
const Actor = require("../models/actor");
const authorize = require("./privateRoutes");

/* GET ALL actors listing. */
router.get("/", authorize, async (req, res, next) => {
  let searchBox = {};
  //RegExp to just search for part of the text, i for case insensitive
  if (req.query.name != null && req.query.name !== "") {
    searchBox.name = new RegExp(req.query.name, "i");
  }
  try {
    const actors = await Actor.find(searchBox);
    res.render("actors/index", {
      actors: actors,
      searchBox: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

/* New actor route. */
router.get("/new", authorize, async (req, res, next) => {
  res.render("actors/new", { actor: new Actor() });
});

/* Create actor route. */
router.post("/", async (req, res, next) => {
  // create new actor schema and send it to DB
  const actor = new Actor({
    name: req.body.name,
  });
  try {
    const newActor = await actor.save();
    // res.redirect("actors/${newActor.id}");
    res.redirect(`actors`);
  } catch {
    res.render("actors/new", {
      actor: actor,
      errorMessage: "Error creating actor",
    });
  }
});

module.exports = router;
