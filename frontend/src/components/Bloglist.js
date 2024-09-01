import React from "react";

const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <>
      <div className="w-1/2">
        <h2 className="text-blue-600 font-bold text-2xl shadow-md pb-4">
          {title}
        </h2>
        {blogs.map((blog) => (
          <div className="flex flex-row justify-between items-center">
            <div
              key={blog.id}
              className="shadow-sm flex flex-col items-start pl-4 p-2"
            >
              <h2 className="font-bold text-blue-600">{blog.title}</h2>
              <p className="font-light text-gray-400 text-sm">
                written by {blog.author}
              </p>
            </div>
            <button
              onClick={() => {
                handleDelete(blog.id);
              }}
              className="pl-4 pr-4 h-10 bg-blue-600 rounded-xl text-gray-100 ml-4 hover:opacity-70"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bloglist;
