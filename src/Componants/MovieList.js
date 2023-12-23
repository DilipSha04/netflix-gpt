import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="px-4">
        <h1 className="text-2xl font-bold text-slate-200  py-2">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCards key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
