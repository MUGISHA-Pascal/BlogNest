const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  googleId: String,
});
const User = mongoose.model("user", userSchema);
module.exports = User;
