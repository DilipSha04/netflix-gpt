import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestion = () => {

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="relative ">
      <div className="w-full absolute z-50 overflow-y-hidden h-auto py-4 md:bg-opacity-90 opacity-100 md:boredr-0 border-t-2 border-red-700 md:mt-[20%] mt-[80%]  px-4 bg-black text-white">
        <button
          className="absolute md:left-[50%] left-[80%] text-white mb-2 text-[28px]"
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
