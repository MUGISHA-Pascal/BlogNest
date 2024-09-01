import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
	const [username, setusername] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const navigate = useNavigate();
	const handlesubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:4000/auth/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, email, password }),
		});
		const result = await response.json();
		if (result) {
			navigate("/login");
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
						Signup
					</p>
					<div>
						<label htmlFor="username" className="text-gray-600 mr-14">
							username :
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => {
								setusername(e.target.value);
							}}
							name="username"
							className="h-8 w-96 focus:outline-none rounded-md mb-4"
						/>
					</div>

					<div className="flex justify-start ml-20 ">
						<label htmlFor="email" className="text-gray-600 mr-16">
							email :
						</label>
						<input
							type="text"
							id="email"
							value={email}
							onChange={(e) => {
								setemail(e.target.value);
							}}
							name="email"
							className="h-8 w-96 focus:outline-none rounded-md mb-4"
						/>
					</div>
					<div>
						<label htmlFor="password" className="text-gray-600 mr-14">
							password :
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => {
								setpassword(e.target.value);
							}}
							name="password"
							className="h-8 w-96 focus:outline-none rounded-md mb-4"
						/>
					</div>
					<div className="flex flex-row items-center justify-center">
						<button
							type="submit"
							className="pl-4 pr-4 p-2 bg-blue-600 rounded-xl w-40 text-gray-100 ml-4 hover:opacity-70 mb-10"
						>
							Signup
						</button>

						<p className="mb-10 ml-4">
							arleady have an account{" "}
							<Link to="/login" className="text-blue-500">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default Signup;
