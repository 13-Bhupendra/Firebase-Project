import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/usersSlices";
import chatReducer from "../Slices/chatRoomSlice"

const reduxStore = configureStore({
  reducer: {
    users: userReducer,
    chat : chatReducer
  },
});

export default reduxStore;
