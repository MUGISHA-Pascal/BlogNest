const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const blogRoutes = require("./routes/blog");
const keys = require("./keys");
const blogPost = require("./model/blogPost");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const passport_setup = require("./config/passport_setup");
const session = require("express-session");
const profileRoutes = require("./routes/profileRoutes");
const passport = require("passport");

mongoose.connect(keys.mongodbURL);
app.use(
  session({
    name: "user cookie",
    secret: keys.secret_key,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use("/blog", blogRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
