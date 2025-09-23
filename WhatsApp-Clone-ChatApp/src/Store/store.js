import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/usersSlices";

const reduxStore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default reduxStore;
