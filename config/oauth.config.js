const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../model/user.model");

module.exports = configure_oauth = () => {
  try {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: `http://localhost:${process.env.PORT}/user/google/callback`,
          passReqToCallback: true,
        },
        (request, accessToken, refreshToken, profile, done) => {
          console.log({ request, accessToken, refreshToken, profile });
          // User.findOrCreate({ facebook_id: profile.id }, (err, user) => {
            return done(null, profile);
          // });
        }
      )
    );
  } catch (e) {
    console.log(e);
  }
};

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});