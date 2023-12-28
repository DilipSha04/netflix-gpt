import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to get GPT API and get Movie Result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, 3idiots, Fukrey, Kabir Singh";

    const getResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(getResult.choices[0]?.message?.content);
    const gptMovieList = getResult.choices[0]?.message?.content.split(",");

    // From each movie i will search TMDB API

    const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
    //[promise, promise, promise, promise, promise]
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames : gptMovieList, movieResults:tmdbResults}));
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className=" flex justify-center items-center bg-black bg-opacity-80 px-4 py-2 absolute top-[20%] w-full"
      >
        <input
          ref={searchText}
          className="py-2 px-4 my-2 mx-2 w-6/12 rounded-md outline-none text-slate-800"
          type="text"
          name=""
          placeholder={lang[langKey].gptSearchPlaceholder}
          id=""
        />
        <button
          className="bg-[#e50314] w-2/12 text-white rounded-sm px-2 py-2 "
          onClick={handleGptearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
