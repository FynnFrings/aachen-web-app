import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./eventsSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[eventsSlice.name]: eventsSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);