const authRoutes = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwtUser = require("../model/jwtUser");
const keys = require("../keys");
const maxAge = 24 * 60 * 60 * 1000;
authRoutes.get("/login", (req, res) => {
  res.render("login");
});
authRoutes.post("/auth_login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await jwtUser.login(username, password);
    console.log(user);
    const token = await jwt.sign({ id: user._id }, keys.secret_key, {
      expiresIn: "1d",
    });
    res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});
authRoutes.post("/signup", async (req, res) => {
  {
    const { username, email, password } = req.body;
    try {
      const user = await jwtUser({ username, email, password }).save();
      const token = await jwt.sign({ id: user._id }, keys.secret_key, {
        expiresIn: "1d",
      });
      res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });
      res.json({ user });
    } catch (error) {
      console.log(error);
    }
  }
});
authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);
authRoutes.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("user cookie");
  res.redirect("/auth/login");
});
authRoutes.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);
module.exports = authRoutes;
