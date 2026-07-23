import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { openSearch } from "../utils/searchSlice";
import {
  Bot,
  LogOut,
  Sparkles,
  Home,
  Search,
  Film,
  Tv,
  Heart,
} from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          }),
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
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        showBackground
          ? "bg-[#141414]/95 backdrop-blur-md shadow-xl"
          : "bg-gradient-to-b from-black via-black/70 to-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-12">
            <img
              src={LOGO}
              alt="Netflix"
              className="w-36 object-contain cursor-pointer"
              onClick={() => navigate("/browse")}
            />

            {user && (
              <nav className="hidden lg:flex items-center gap-8">
                <button className="flex items-center gap-2 text-white hover:text-red-500 transition duration-300">
                  <Home size={18} />
                  Home
                </button>

                <button className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition duration-300">
                  <Film size={18} />
                  Movies
                </button>

                <button className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition duration-300">
                  <Tv size={18} />
                  TV Shows
                </button>

                <button className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition duration-300">
                  <Heart size={18} />
                  My List
                </button>
              </nav>
            )}
          </div>

          {/* RIGHT SIDE */}
          {user && (
            <div className="flex items-center gap-4">
              {/* GPT Search */}
              <button
                onClick={handleGptSearchClick}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium hover:scale-105 transition duration-300 shadow-lg"
              >
                <Sparkles size={18} />
                {showGptSearch ? "Home" : "GPT Search"}
              </button>

              {/* Search */}
              <button
                onClick={() => dispatch(openSearch())}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition duration-300"
              >
                <Search size={20} className="text-white" />
              </button>

              {/* AI Profile */}
              <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>

                <div className="hidden xl:block">
                  <p className="text-white text-sm font-medium">AI</p>

                  <p className="text-green-400 text-xs">Online</p>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white hover:bg-red-600 hover:border-red-600 transition duration-300"
              >
                <LogOut size={18} />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
