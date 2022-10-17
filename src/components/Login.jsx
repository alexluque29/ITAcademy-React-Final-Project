import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import "../styles/login.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
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
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    await loginWithGoogle();
    navigate("/home");
  };

  return (
    <div className="container-login">
      <div className="w-full max-w-md m-auto text-lg">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white
      shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              placeholder="youremail@company.xxx"
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
              placeholder="******"
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-neutral-400 hover:bg-neutral-600
         text-white text-sm font-bold py-2 px-4 rounded focus: outline-none
         focus: shadow-outline"
          >
            Login
          </button>
        </form>
        <button
          className="bg-slate-100 hover:bg-slate-300 text-black
      shadow-md rounded border-2 border-gray-300 py-2 px-4
      w-full"
          onClick={handleGoogleSignin}
        >
          Google Login
        </button>

        <p className="text-sm flex justify-between px-3 mt-5">
          Don't you have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
