const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const jwtUserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

jwtUserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

jwtUserSchema.statics.login = async (username, password) => {
  try {
    const user = await this.findOne({ username });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      } else {
        throw Error("invalid password");
      }
    } else {
      throw Error("invalid username");
    }
  } catch (error) {
    console.log(error);
  }
};

const jwtUser = mongoose.model("jwtUser", jwtUserSchema);
module.exports = jwtUser;
