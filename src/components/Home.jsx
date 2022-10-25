import Navbar from "./Navbar";
import { useState } from "react";
import Main from "./Main";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";

export const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <Navbar />
      <Main />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </>
  );
};
