import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("Please fill out all required fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Add sign-up logic here, like calling an API
    console.log("User signing up with data:", user);

    // Navigate to login after successful sign-up
    navigate("/signin");
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <div className="absolute top-20 left-10 flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Create Your Account
          </h1>
          <p className="text-xl text-white font-normal">
            Join us to experience the finest luxury.
          </p>
        </div>
        <img
          src={"./fa.jpg"}
          className="w-full h-full object-cover"
          alt="Cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-5 md:p-20 justify-between items-center">
        <h1 className="text-xl text-[#060606] font-semibold text-center md:text-left">
          Welcome To Our Luxury Rooms
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2 text-center md:text-left">
              Sign Up
            </h3>
            <p className="text-base mb-2 text-center md:text-left">
              Please enter your details to create an account.
            </p>

            <div className="w-full flex flex-col">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                value={user.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                value={user.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                value={user.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col my-4">
              <button
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center cursor-pointer"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Already have an account?{" "}
              <span
                className="font-semibold cursor-pointer underline"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
