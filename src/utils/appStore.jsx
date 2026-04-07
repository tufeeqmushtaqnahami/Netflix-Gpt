// import { configureStore} from "@reduxjs/toolkit"
// import { userReducer } from "./userSlice";


// const appStore  = configureStore(
//   {
//     reducer: {
//       user: userReducer,
//     },
//   }
// )


// export default appStore;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // ✅ correct default import

const appStore = configureStore({
  reducer: {
    user: userReducer, // ✅ correct reducer assignment
  },
});

export default appStore;