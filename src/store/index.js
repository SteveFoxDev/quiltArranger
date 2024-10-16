import { configureStore } from "@reduxjs/toolkit";
import { quiltReducer } from "./slices/quiltSlice";

export const store = configureStore({
    reducer: {
        quilt: quiltReducer,
    },
});