import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { checkValidData } from "../utils/Validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/Constants";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } =
                auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <h1 className="text-white text-4xl font-bold text-center mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-4 mb-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 mb-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-2 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <button
            className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold p-4 rounded-lg mt-6"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-gray-500 text-center mt-6 cursor-pointer hover:text-white transition-all"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
