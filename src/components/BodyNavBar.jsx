import BodyPart from "./BodyPart";
import "../styles/bodyNavBar.css"


const bodyNavBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="horizontal">
      {data.map((item) => (
        <div className="menu" key={item.id || item }>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </div>
  );
};

export default bodyNavBar;
