import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="">
      <form
        action=""
        className=" flex justify-center items-center bg-black bg-opacity-80 px-4 py-2 absolute top-[30%] w-full"
      >
        <input
          className="py-2 px-4 my-2 mx-2 w-6/12 rounded-md outline-none text-slate-800"
          type="text"
          name=""
          placeholder={lang[langKey].gptSearchPlaceholder}
          id=""
        />
        <button className="bg-[#e50314] w-2/12 text-white rounded-sm px-2 py-2 ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
