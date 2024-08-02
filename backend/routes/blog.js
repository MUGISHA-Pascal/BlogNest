const blogRoutes = require("express").Router();
const blogPost = require("../model/blogPost");

blogRoutes.post("/post_blog", async (req, res) => {
  const { blog } = req.body;
  await blogPost({ blog }).save();
  res.send("the blog is created");
});
blogRoutes.get("/get_blog", async (req, res) => {
  const { blog } = req.body;
  const found = await blogPost.find({ blog });
  res.send(found);
});
blogRoutes.put("/update_blog", async (req, res) => {
  const { prev_blog, new_blog } = req.body;
  const updated = await blogPost.updateOne(
    { blog: prev_blog },
    { blog: new_blog }
  );
  res.send(updated);
});
blogRoutes.delete("/delete_blog", async (req, res) => {
  const { blog } = req.body;
  const deleted = await blogPost.deleteOne({ blog });
  res.send(deleted);
});

module.exports = blogRoutes;
