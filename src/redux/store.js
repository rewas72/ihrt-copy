// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";
import newsReducer from "./features/newsSlice";
import publicationsReducer from "./features/publicationsSlice";
import menuReducer from "./features/menuSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    news : newsReducer,
    publications: publicationsReducer,
    menu: menuReducer
  },
});


export default store;