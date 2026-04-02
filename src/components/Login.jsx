import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
 const [isSignInForm, setIsSignInForm] = useState(true)

 const toggleSignInForm = ()=>{
   setIsSignInForm(!isSignInForm)
 }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
          alt="logo"
        />
      </div>
      <form
        action=""
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-xl bg-opacity-85"
      >
        <h1 className="font-bold text-white text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm &&(<input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm"
        />)
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm"
        />
        <button className="p-4 my-6 bg-red-800 w-full text-white rounded-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white cursor-pointer hover:text-blue-500" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
