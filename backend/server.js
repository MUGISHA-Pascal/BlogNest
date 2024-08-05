const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const blogRoutes = require("./routes/blog");
const keys = require("./keys");
const blogPost = require("./model/blogPost");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongodbURL);
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use("/blog", blogRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
