import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./Redux/PasteSlice"

const store = configureStore({
  reducer: {
    paste: pasteReducer, // Add reducers here
  },
});

export default store;
