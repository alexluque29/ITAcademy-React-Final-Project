import React from "react";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyNavBar from "./BodyNavBar";
import "../styles/searchExercises.css";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <div className="search-row">
        <div className="youcan">Awesome Exercises You Should Know</div>
        <input
          type="text"
          className="input w-full max-w-xs bg-white"
          placeholder="Search by Body Part, Muscle or Name"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <BodyNavBar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </>
  );
};

export default SearchExercises;
