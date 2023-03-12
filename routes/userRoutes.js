const express = require("express");
const route = express.Router();
const passport = require("passport");
const validateUser = require("../middlewares/user.validate");

route.get("/protected-route", validateUser.isLoggedIn, (req, res) => {
  res.render("google_auth_success");
});

// login 
route.get("/login-facebook", (req, res) => {
  res.send('<a href="/user/auth/google">Login with facebook</a>');
});

route.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

route.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "google_auth_failure",
    failureFlash: true,
  }),
  (req, res) => {
    res.render("google_auth_success", {
      message : req.user.displayName
    });
  }
);
// Login via own site.
// route.get("/login", (req, res) => {})

// Register in own site
// route.post("/register", (req, res) => {})

module.exports = route;
