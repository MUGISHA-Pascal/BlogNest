const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  blog: String,
  date: { type: Date, default: Date.now },
});
const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
