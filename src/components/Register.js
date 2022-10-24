import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import "../styles/register.css";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({
      ...user,
      [name]: value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.log(user);
    }
  };

  return (
    <div className="container-register">
      <div className="w-full max-w-md m-auto text-lg">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white
          shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-grey 700
              text-md font-fold mb2"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus: outline-none
              focus: shadow-outline"
              type="text"
              name="firstname"
              placeholder="Your first name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-grey 700
              text-md font-fold mb2"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus: outline-none
              focus: shadow-outline"
              type="text"
              name="lastname"
              placeholder="Your last name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-grey 700
              text-md font-fold mb2"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus: outline-none
              focus: shadow-outline"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus: outline-none
              focus: shadow-outline"
              type="password"
              name="password"
              id="password "
              placeholder="****** at least 6 characters."
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700
            text-white text-sm font-bold py-2 px-4 rounded focus: outline-none
            focus: shadow-outline"
          >
            Register
          </button>
        </form>
        <p className="text-sm flex justify-between px-3 mt-5">
          Already registered?{" "}
          <Link to="/login" className="text-blue-700 hover:font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
