import { configureStore } from "@reduxjs/toolkit";
import journeySlice from "./journeySlice";

const store = configureStore({
	reducer: { journey: journeySlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
