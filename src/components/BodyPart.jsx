import Icon from "../image/gym-near.png";
import Icon2 from "../image/biceps.png";
import Icon3 from "../image/back.png";
import Icon4 from "../image/cardio.png";
import Icon5 from "../image/quads.png";
import Icon6 from "../image/lowleg.png";
import Icon7 from "../image/shoulder.png";
import Icon8 from "../image/chest.png";
import Icon9 from "../image/neck.png";
import Icon10 from "../image/waist.png";

import "../styles/bodyPart.css";

const BodyPart = ({ item, setBodyPart }) => {
  
 let image = (item==="upper arms" || item==="lower arms") ? Icon2 : (item==="back") ? Icon3 : (item==="cardio") ? Icon4
 : (item==="upper legs") ? Icon5 : (item==="lower legs") ? Icon6 : (item==="shoulders") ? Icon7
 : (item==="chest") ? Icon8 : (item==="neck") ? Icon9 : (item==="waist") ? Icon10 : Icon;

 
  return (
    <button
      className="bodyBar"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={image} alt="icon" className="bodyIcon w-11 h-11" />
      <div className="bodyItem text-transform: capitalize">{item}</div>
    </button>
  );
};

export default BodyPart;
