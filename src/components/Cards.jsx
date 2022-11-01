import { Link } from "react-router-dom";
import "../styles/card.css";

const Cards = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <div className="full-card">
        <img
          src={exercise.gifUrl}
          className="image"
          alt={exercise.name}
          loading="lazy"
        />
        <div className="low-card">
          <div className="buttons">
            <button className="a-button btn btn-xs mt-2 mb-2">
              {exercise.bodyPart}
            </button>
            <button className="b-button btn btn-xs">{exercise.target}</button>
          </div>
          <div className="name flex justify-center capitalize font-bold text-yellow-600 pt-3 pb-2">
            {exercise.name}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
