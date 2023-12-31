import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:w-screen w-[100%] md:h-0 h-[100vh]  bg-gradient-to-r from-black ">
     <div className="absolute left-[6%] md:top-[30%] top-[50%] md:w-6/12 w-10/12">
     <h1 className="md:text-[36px] text-[26px] md:leading-0 leading-[1.2] text-white font-bold">{title}</h1>
      <p className="text-white md:text-[18px] hidden md:inline-block font-semibold">{overview}</p>
      <div className=" flex gap-2 my-2">
        <button className="bg-white text-black px-4 rounded-sm py-1 font-bold hover:bg-opacity-70">▶ Play</button>
        <button className="bg-gray-400 px-4 bg-opacity-50 text-white rounded-sm py-1 hover:bg-opacity-20 "> More Info</button>
      </div>
     </div>
    </div>
  );
};

export default VideoTitle;
