import { Link } from "react-router-dom";
import "../styles/landing.css";
import fitgirl from "../image/fitgirl.png";

export const Landing = () => {
  return (
    <>
      <div className="topline"></div>
      <div className="container">        
        <div className="cont-left">
          <p className="shorter"><span style={{ color: "#f5df3c" }}>Fast Fitness</span></p>
          <p className="shorter">SHORTER WORKOUTS,</p>
          <p className="better">BETTER RESULTS</p>
          <p>SHORT, MANAGEABLE WORKOUTS FOR <br />PEOPLE WITH NO TIME.</p>
          <Link to="/home" className="button-home">
            START HERE
          </Link>
        </div>
        <div className="cont-right">
          <img src={fitgirl} className="fitgirl" alt="fitgirl" />
        </div>
      </div>
      <div className="topline"></div>
    </>
  );
};
