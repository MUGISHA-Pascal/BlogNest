const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const blogRoutes = require("./routes/blog");
const keys = require("./keys");
const blogPost = require("./model/blogPost");
const mongoose = require("mongoose");

mongoose.connect(keys.mongodbURL);
app.use(bodyparser.json());
app.use("/blog", blogRoutes);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
