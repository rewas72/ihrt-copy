// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";
import newsReducer from "./features/newsSlice";
import publicationsReducer from "./features/publicationsSlice";


export const store = configureStore({
  reducer: {
    event: eventReducer,
    news : newsReducer,
    publications: publicationsReducer
  },
});


export default store;