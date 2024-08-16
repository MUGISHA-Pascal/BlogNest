import React from "react";

const Create = () => {
  return (
    <>
      <div class="flex items-center justify-center pt-10">
        <form class="flex flex-col bg-gray-100 w-1/2 rounded-md">
          <p class="text-blue-600 font-bold text-2xl shadow-md pb-4 p-2 mb-6">
            Add a blog
          </p>
          <div>
            <label for="title" class="text-gray-600 mr-14">
              Title :
            </label>
            <input
              type="text"
              id="title"
              name="title"
              class="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div>
            <label for="author" class="text-gray-600 mr-10">
              Author :
            </label>
            <input
              type="text"
              id="author"
              name="author"
              class="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div class="flex justify-start ml-20 ">
            <label for="details" class="text-gray-600 mr-10">
              Details :
            </label>
            <textarea class="h-20 w-96 focus:outline-none rounded-md mb-10"></textarea>
          </div>
          <div class="flex  justify-center items-center ">
            <button
              type="submit"
              class="pl-4 pr-4 p-2 bg-blue-600 rounded-xl w-40 text-gray-100 ml-4 hover:opacity-70 mb-10"
            >
              Add blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
