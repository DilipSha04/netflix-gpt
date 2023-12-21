import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video py-36 px-20 absolute bg-gradient-to-r from-black ">
      <h1 className="text-[56px] text-white font-bold">{title}</h1>
      <p className="text-white text-[20px] w-5/12 font-semibold">{overview}</p>
      <div className=" flex gap-2 my-2">
        <button className="bg-white text-black px-4 rounded-sm py-1 font-bold hover:bg-opacity-70">▶ Play</button>
        <button className="bg-gray-400 px-4 bg-opacity-50 text-white rounded-sm py-1 hover:bg-opacity-20 "> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
