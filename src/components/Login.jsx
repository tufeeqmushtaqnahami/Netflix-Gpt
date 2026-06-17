import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/Validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/Constants";

const Login = () => {
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //CreatNewUser
    if (!isSignInForm) {
      //SignUp Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser  ;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code + "-" + error.message);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
      
          // ...

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code + "-" + error.message);
        });
    }

    //SIgnIN/UP
  };

  return (
    <div>
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="logo"
          className="h-screen w-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 md:p-12 bg-black mt-32 md:mt-36 mx-auto right-0 left-0 rounded-xl bg-opacity-85"
      >
        <h1 className="font-bold text-white text-2xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 md:p-4 my-4 w-full bg-gray-800 rounded-sm text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 md:p-4 my-4 w-full bg-gray-800 rounded-sm text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-4 w-full bg-gray-800 rounded-sm text-white"
        />
        <p className="text-red-600 text-sm md:text-base">{errorMessage}</p>
        <button
          className="p-3 md:p-4 my-6 bg-red-800 w-full text-white rounded-2xl text-sm md:text-base"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white cursor-pointer hover:text-blue-500 text-sm md:text-base"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?Sign Up Now"
            : "Already Registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
