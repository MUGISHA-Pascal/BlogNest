import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="flex flex-row justify-between pl-4 pr-4 h-16 items-center shadow-md">
        <h1 class="text-blue-600 font-bold text-2xl">BlogNest</h1>
        <div>
          <Link
            to="/"
            class="border-2 border-blue-600 rounded-full text-blue-600 pl-4 pr-4 p-2"
          >
            home
          </Link>
          <Link
            to="/signup"
            class="border-2 border-blue-600 rounded-full text-blue-600 pl-4 pr-4 p-2 ml-4"
          >
            signup
          </Link>
          <Link
            to="/create"
            class="pl-4 pr-4 p-2 bg-blue-600 rounded-full text-gray-100 ml-4 hover:opacity-70"
          >
            add blog
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
