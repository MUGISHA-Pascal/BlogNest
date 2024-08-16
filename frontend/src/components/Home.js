import React, { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "coding", author: "pascal", id: 1, body: "this is it" },
    { title: "playing", author: "mugisha", id: 2, body: "this is also it" },
    { title: "praying", author: "daddy", id: 3, body: "this is not it" },
  ]);
  return (
    <>
      <div class="flex items-center justify-center mt-10">
        <Bloglist blogs={blogs} title="All blogs" />
      </div>
    </>
  );
};

export default Home;
