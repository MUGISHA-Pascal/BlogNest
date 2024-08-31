const authRoutes = require("express").Router();
const passport = require("passport");
authRoutes.get("/login", (req, res) => {
  res.render("login");
});
authRoutes.post("/signup", async (req, res) => {});
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
