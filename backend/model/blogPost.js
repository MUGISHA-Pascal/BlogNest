const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  blog: String,
  date: { type: Date, default: Date.now },
});
const blogPost = mongoose.model("blogPost", blogSchema);

module.exports = blogPost;
