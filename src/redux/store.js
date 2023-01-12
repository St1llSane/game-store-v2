import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./slices/gamesSlice";

export const store = configureStore({
	reducer: {
		gamesSlice
	}
})