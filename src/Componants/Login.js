import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-black contrast-125">
        <img
          className=" bg-center bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        className="flex  flex-col bg-black bg-opacity-90 absolute w-2/6 left-[35%] top-[15%] px-12 py-2 rounded-sm"
        action=""
      >
        <h1 className="text-white font-semibold text-[26px] my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
        />}
        <input
          type="email"
          placeholder="Email"
          className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
        />
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
        />
        <button className="bg-[#e50914] text-white p-3 my-3 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between my-4">
          <span className="text-slate-400 ">
            <input className="mr-2 bg-slate-400" type="checkbox" />
            Remember me
          </span>
          <span className="text-slate-400">Need Help ? </span>
        </div>
        <p className="text-slate-400 mt-2 cursor-pointer" onClick={toggelSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now."
            : "Already Ragisterd.. Sign In Now."}
        </p>
        <p className="text-slate-400 mt-1 mb-8">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
