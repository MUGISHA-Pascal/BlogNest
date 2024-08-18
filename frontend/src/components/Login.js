import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="flex items-center justify-center pt-10">
        <form class="flex flex-col bg-gray-100 w-1/2 rounded-md">
          <p class="text-blue-600 font-bold text-2xl shadow-md pb-4 p-2 mb-6">
            Login
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

          <div class="flex flex-row items-center justify-center">
            <button
              type="submit"
              class="pl-4 pr-4 p-2 bg-blue-600 rounded-xl w-40 text-gray-100 ml-4 hover:opacity-70 mb-10"
            >
              Login
            </button>

            <p class="mb-10 ml-4">
              don't have an account
              <Link to="/signup" class="text-blue-500 ml-2">
                signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
