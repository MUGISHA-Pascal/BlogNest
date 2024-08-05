const passport = require("passport");
const keys = require("../keys");
const googleStrategy = require("passport-google-oauth20");
passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("ha");
    }
  )
);
