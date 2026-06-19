import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { Bot, LogOut, Sparkles, Home } from "lucide-react";

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
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="flex flex-col items-center py-4 bg-gradient-to-b from-black via-black/95 to-transparent">
        
        {/* Netflix Logo */}
        <img
          src={LOGO}
          alt="Netflix-logo"
          className="w-40 md:w-52 mb-5 drop-shadow-2xl"
        />

        {/* User Controls */}
        {user && (
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-2xl">

            {/* GPT Search Button */}
            <button
              onClick={handleGptSearchClick}
              className="flex items-center gap-2 px-5 py-2 rounded-full
              bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600
              text-white text-sm font-semibold
              shadow-lg hover:scale-105 hover:shadow-purple-500/30
              transition-all duration-300"
            >
              {showGptSearch ? (
                <>
                  <Home size={16} />
                  Home
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  GPT Search
                </>
              )}
            </button>

            {/* AI Profile Icon */}
            <div className="relative">
              <div
                className="flex items-center justify-center
                w-9 h-9 rounded-full
                bg-gradient-to-br
                from-slate-800
                via-slate-700
                to-slate-900
                border border-white/10
                shadow-lg
                hover:scale-110
                transition-all duration-300
                cursor-pointer"
              >
                <Bot size={18} className="text-cyan-400" />
              </div>

              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-black rounded-full"></div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2
              bg-white/10 backdrop-blur-sm
              border border-white/10
              px-4 py-2 rounded-full
              text-white font-medium
              hover:bg-red-600 hover:border-red-600
              transition-all duration-300"
            >
              <LogOut size={16} />
              Sign Out
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Header;