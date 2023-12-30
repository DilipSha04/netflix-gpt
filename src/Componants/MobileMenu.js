import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggelGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";
import Login from "./Login";

const MobileMenu = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggelGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  if(!isMenuOpen) return null;
  return (
  <>
    <div className="md:hidden flex relative">
      <div className="flex flex-col justify-center  space-y-4 py-2 fixed w-5/12 h-[50%] right-0 top-0 bg-black bg-opacity-80 text-white ">
        {showGptSearch && (
          <select
            className="outline-none rounded-sm bg-[#e50314] px-2 py-2 mx-2  text-white "
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="text-[12px] py-0 md:py-1 px-0"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="px-4 py-2 mx-2 bg-[#e50314] text-white rounded-sm"
          onClick={handleGptSearch}
        >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>
        <button
          className="bg-[#e50914] text-white text-[16px] mx-2 py-2 px-4 rounded-sm"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
    </>
  );
};

export default MobileMenu;
