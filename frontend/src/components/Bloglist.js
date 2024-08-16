import React from "react";

const Bloglist = ({ blogs, title }) => {
  return (
    <>
      <div class="w-1/2">
        <h2 class="text-blue-600 font-bold text-2xl shadow-md pb-4">{title}</h2>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            class="shadow-sm flex flex-col items-start pl-4 p-2"
          >
            <h2 class="font-bold text-blue-600">{blog.title}</h2>
            <p class="font-light text-gray-400 text-sm">
              written by {blog.author}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bloglist;
