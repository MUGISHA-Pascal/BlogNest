import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/auth/auth_login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pt-10">
        <form
          className="flex flex-col bg-gray-100 w-1/2 rounded-md"
          onSubmit={handlesubmit}
        >
          <p className="text-blue-600 font-bold text-2xl shadow-md pb-4 p-2 mb-6">
            Login
          </p>
          <div>
            <label htmlFor="username" className="text-gray-600 mr-14">
              username :
            </label>
            <input
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              id="username"
              name="username"
              className="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mr-14">
              password :
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              id="password"
              name="password"
              className="h-8 w-96 focus:outline-none rounded-md mb-4"
            />
          </div>

          <div className="flex flex-row items-center justify-center">
            <button
              type="submit"
              className="pl-4 pr-4 p-2 bg-blue-600 rounded-xl w-40 text-gray-100 ml-4 hover:opacity-70 mb-10"
            >
              Login
            </button>

            <p className="mb-10 ml-4">
              don't have an account
              <Link to="/signup" className="text-blue-500 ml-2">
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
