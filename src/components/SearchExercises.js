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
      console.log(searchedExercises);
    }
  };

  return (
    <>
      <div className="awesome">
        Awesome Exercises You <br /> Should Know
      </div>
      <div className="search-row">
        <input
          type="text"
          className="input w-full max-w-xs bg-white"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className=" button" onClick={handleSearch}>
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
