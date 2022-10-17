import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

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
      if (error.code === "auth/weak-password") {
        setError("El password debe tener al menos 6 caracteres.");
      }
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password "
          placeholder="******"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
    </div>
  );
}