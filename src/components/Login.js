import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import "../styles/login.css";
import google from "../image/google.png";



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
      <div className="please">Please, log in with your email & password or with your Google account.</div>
      <div className="w-full max-w-md m-auto text-lg">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white
          shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-zinc-700"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block
              text-md mb2"
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
          <div className="mb-4" >
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
            className="bg-blue-500 hover:bg-blue-700
            text-white text-sm font-bold py-2 px-4 rounded focus: outline-none
            focus: shadow-outline"
          >
            Login
          </button>
        </form>
        <button
          className=" google bg-slate-100 hover:bg-slate-300 text-black
          shadow-md rounded border-2 border-gray-300 px-4
          w-full"
          onClick={handleGoogleSignin}>
          <img src={google} className="google-button" alt="google"/>
          <p className="text-sm text-blue-800 font-bold">Login</p>
        </button>
        <p className="text-sm flex justify-between px-3 mt-5">
          Don't you have an account?{" "}
          <Link to="/register" className="text-blue-700 hover:font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
