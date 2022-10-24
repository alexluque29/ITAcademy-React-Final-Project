import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "../styles/exercises.css";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Cards from "./Cards";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );

      setExercises(exercisesData);
    };

    fetchExercisesData();
    // eslint-disable-next-line
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <div id="exercises">
      <div className="showing">Showing {exercises.length} results.</div>
      <div className="exercises-list">
        {currentExercises.map((exercise, i) => (
          <Cards key={i} exercise={exercise} />
        ))}
      </div>
      <div className="pagination">
        {exercises.length > 9 && (
          <Pagination
            variant="outlined"
            color="primary"
            shape="rounded"
            size="medium"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
