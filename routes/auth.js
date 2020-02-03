var express = require("express");
var router = express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/home");

    console.log("current user" + req.user);
  }
);

router.get("/api/logout", function(req, res) {
  req.logout();
  res.send("you are logged out");
});

router.get("/api/current_user", function(req, res) {
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
