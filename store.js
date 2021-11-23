import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const sotre = configureStore({
    reducer: {
        nav: navReducer
    },
});