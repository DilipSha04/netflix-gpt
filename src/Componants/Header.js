import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggelGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-10 bg-black md:py-0 py-10 ">
      <img className="md:w-[14rem] w-[10rem] md:ml-2 ml-3 md:mt-0 contrast-125" src={LOGO} alt="Logo" />
      {user && (
        <div className="absolute right-3 md:top-6 top-24  mt-2">
          <div className="flex justify-between">
          {showGptSearch && <select
            className="outline-none bg-[#e50314] px-2  text-white "
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className="text-[12px] md:text-[16px] py-0 md:py-1 px-0" key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="px-4 py-2 mx-4 bg-[#e50314] text-white rounded-sm"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 rounded-sm"
            src={user?.photoURL}
            alt="userProfile"
          />
          <button
            className="bg-[#e50914] text-white text-[16px] mx-4 px-2 rounded-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
