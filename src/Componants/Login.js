import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [validationMessage, setValidationMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setValidationMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setValidationMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="bg-gradient-to-b from-black contrast-125">
        <img
          className="h-screen md:w-[100vw] object-cover "
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col bg-black bg-opacity-90 absolute md:w-2/6 w-full md:left-[35%] left-0 md:top-[17%] top-[26%] px-12 rounded-sm z-10"
        action=""
      >
        <h1 className="text-white font-semibold text-[24px] my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          {!isSignInForm && (
            <p className="text-orange-400 text-[10px]">
              Note* - You Can Use Fake Email ID, Make Sure Your Pass. Should
              Contain 8 character with one Capital letter, Special char. &
              Numbers
            </p>
          )}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="px-2 py-3 my-3 bg-[#333] rounded-md outline-none caret-white text-white"
        />
        <p className="py-2 px-1  text-orange-500">{validationMessage}</p>
        <button
          className="bg-[#e50914] text-white p-3 my-3 rounded-md"
          onClick={handleClickButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <div className="flex justify-between my-4">
          <span className="text-slate-400 ">
            <input className="mr-2 bg-slate-400" type="checkbox" />
            Remember me
          </span>
          <span className="text-slate-400">Need Help ? </span>
        </div> */}
        <p
          className="text-slate-400 mt-2 cursor-pointer"
          onClick={toggelSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? 👉Sign Up Now."
            : "Already Ragisterd.. 👉Sign In Now."}
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
