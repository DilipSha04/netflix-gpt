import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-10 flex">
      <img
        className="w-[14rem] contrast-125"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && <div className="absolute right-3 top-6  flex">
        <img
          className="w-10 rounded-xl"
          src={user?.photoURL}
          alt="userProfile"
        />
        <button
          className="bg-[#e50914] text-white text-[16px] mx-4 px-2 rounded-md"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
