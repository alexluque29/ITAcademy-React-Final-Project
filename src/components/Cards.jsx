import { Link } from 'react-router-dom';
import "../styles/card.css";

const Cards = ({exercise}) => {
  return (
    <Link className="exercise-card border-solid border-2 border-gray-500 rounded" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <div className='buttons'>
        <button className="a-button btn btn-xs mt-2 mb-2">{exercise.bodyPart}</button>
        <button className="b-button btn btn-xs">{exercise.target}</button>
        </div>
        <div className='name flex justify-center capitalize font-bold text-yellow-600' mt-2 >{exercise.name}</div>

    </Link>
  )
}

export default Cards