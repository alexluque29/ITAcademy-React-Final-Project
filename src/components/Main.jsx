import "../styles/main.css";
import Icon from "../image/fitboy.png";

const Main = () => {
  return (
    <div className="container">
      <div className="quote">
        EACH NEW DAY <br />
        IS A NEW <br />
        OPPORTUNITY <br />
        TO IMPROVE <br />
        YOURSELF. <br />
        <span className="takeit">TAKE IT</span>
        <br /> AND MAKE THE
        <br /> MOST OF IT.
      </div>
      <div className="right">
        <img src={Icon} alt="fitboy" className="fitboy" />
      </div>
    </div>
  );
};

export default Main;
