const passport = require("passport");
const keys = require("../keys");
const User = require("../model/user");
const googleStrategy = require("passport-google-oauth20");
passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      await User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          //found a user in database
          console.log(currentUser);
        } else {
          const newUser = new User({
            username: profile.displayName,
            googleId: profile.id,
          }).save();
          console.log(newUser);
        }
      });
    }
  )
);
