import { configureStore } from "@reduxjs/toolkit";
import makeUpReducer from "../features/makeUpSlice";

const store = configureStore({
  reducer: {
    makeUp: makeUpReducer,
  },
});

export default store;
