import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestion = () => {

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="">
      <div className="w-full absolute z-50 overflow-y-hidden h-auto py-4 bg-opacity-90 mt-[20%] px-4 bg-black text-white">
        <button
          className="absolute left-[50%] text-white m-1 text-[28px]"
        >
          &#x292B;
        </button>
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
