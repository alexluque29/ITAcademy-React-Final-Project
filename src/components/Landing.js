import { Link } from "react-router-dom";
import "../styles/landing.css";

export const Landing = () => {
  return (
    <>
      <div className="landing">
        <h1>LANDING PAGE</h1>
        <Link to="/home">Home</Link>
      </div>
    </>
  );
};
