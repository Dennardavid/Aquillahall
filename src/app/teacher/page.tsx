"use client";
import Link from "next/link";
import { useState } from "react";
import { login } from "../actionteacher";
import Aside from "../../components/aside";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HashLoader } from "react-spinners";

function TeachersLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    // Calling the server action directly
    const result: any = await login(formData);

    if (result?.error) {
      setLoading(false);
      setError(result.error);
    } else {
      // Redirect to login page on success
      setLoading(false);
      window.location.href = "/teacherdashboard";
    }
  };

  /* Function to show password */
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="flex">
      <Aside />
      <div className="bg-Gray md:bg-white flex items-center w-full md:w-[55%] justify-center h-screen flex-col relative">
        <span className="absolute top-7 right-6 md:absolute md:top-7 md:right-6 lg:absolute lg:top-12 lg:right-20">
          Teachers Login
        </span>
        <div className=" w-[80%] lg:w-[60%]">
          <h1 className="mb-2 font-extrabold text-xl md:text-2xl lg:text-3xl text-center text-VeryDarkBlue">
            Login to your account
          </h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-VeryDarkBlue">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password" className="text-VeryDarkBlue">
              Password:
            </label>
            <div className="flex items-center w-full ring-1 ring-cyan rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan gap-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="ring-0 ring-transparent w-[95%] focus:ring-transparent focus:ring-0"
                required
              />
              {showPassword ? (
                <FaEye
                  className="hover:cursor-pointer mr-2"
                  size={20}
                  color="hsl(257, 27%, 26%)"
                  onClick={handleShow}
                />
              ) : (
                <FaEyeSlash
                  className="hover:cursor-pointer mr-2"
                  size={20}
                  color="hsl(257, 27%, 26%)"
                  onClick={handleShow}
                />
              )}
            </div>
            {error && <span className="text-red-500">{error}</span>}
            <button
              type="submit"
              className="p-2 rounded-lg mt-2 h-10 flex justify-center items-center"
            >
              {loading ? <HashLoader color="#fff" size={20} /> : "Login"}
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/teacher/signup" className="text-cyan">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeachersLogin;
