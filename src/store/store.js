import { configureStore } from "@reduxjs/toolkit";
import SectionSlice from "./features/SectionSlice";
const store = configureStore({
  reducer: {
    section: SectionSlice
  },
});

export default store;
