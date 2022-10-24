import Icon from "../image/gym-near.png";
import "../styles/bodyPart.css";

const BodyPart = ({ item, setBodyPart }) => {
  return (
    <button
      className="bodyBar"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} alt="icon" className="bodyIcon w-11 h-11" />
      <div className="bodyItem text-transform: capitalize">{item}</div>
    </button>
  );
};

export default BodyPart;
