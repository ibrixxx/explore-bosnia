import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";

export const sotre = configureStore({
    reducer: {
        nav: navSlice
    },
});