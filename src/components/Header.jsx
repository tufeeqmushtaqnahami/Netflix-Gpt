import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { USER_AVATAR } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="flex flex-col items-center py-4 bg-gradient-to-b from-black via-black/90 to-transparent">
        
        <img
          src={LOGO}
          alt="Netflix-logo"
          className="w-36 md:w-48 mb-4"
        />

        {user && (
          <div className="flex items-center gap-4">
            <button
              onClick={handleGptSearchClick}
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>

            <img
              src={USER_AVATAR}
              alt="Profile"
              className="w-10 h-10 rounded border border-black object-cover"
            />

            <button
              onClick={handleSignOut}
              className="text-white font-semibold hover:text-red-500"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
