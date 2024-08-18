import React from "react";

const Signup = () => {
  return (
    <>
      <div class="flex items-center justify-center pt-10">
        <form class="flex flex-col bg-gray-100 w-1/2 rounded-md">
          <p class="text-blue-600 font-bold text-2xl shadow-md pb-4 p-2 mb-6">
            Signup
          </p>
          <div>
            <label for="username" class="text-gray-600 mr-14">
              username :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div>
            <label for="password" class="text-gray-600 mr-14">
              password :
            </label>
            <input
              type="text"
              id="password"
              name="password"
              class="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div class="flex justify-start ml-20 ">
            <label for="email" class="text-gray-600 mr-16">
              email :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              class="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div class="flex  justify-center items-center ">
            <button
              type="submit"
              class="pl-4 pr-4 p-2 bg-blue-600 rounded-xl w-40 text-gray-100 ml-4 hover:opacity-70 mb-10"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
