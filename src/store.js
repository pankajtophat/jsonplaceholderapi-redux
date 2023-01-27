import { configureStore } from "@reduxjs/toolkit";
// import companySlice from "./companySlice";
import AppSlice from "../AppSlice";
export const store = configureStore({
  reducer: {
    AppList: AppSlice,
  },
});
