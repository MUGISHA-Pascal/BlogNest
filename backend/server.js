const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const blog = require("./routes/blog");
const keys = require("./keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongodbURL);
app.use("/blog", blog);
app.use(bodyparser.json());

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
