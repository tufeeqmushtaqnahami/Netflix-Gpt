import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
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
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe()
  }, []);




  const handleGptSearchClick =()=>{
   dispatch(toggleGptSearchView())
  }


  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix-logo"
      />

      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-4 mt-2 bg-purple-700 rounded-lg text-white" 
          onClick={handleGptSearchClick}>
            {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
          <img src={user?.photoURL} alt="Icon" className="w-12 h-12 " />
          <button
            onClick={handleSignOut}
            className="font-bold text-white"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
