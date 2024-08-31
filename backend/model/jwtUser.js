const mongoose = require("mongoose");

const jwtUserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const jwtUser = mongoose.model("jwtUser", jwtUserSchema);
module.exports = jwtUser;
