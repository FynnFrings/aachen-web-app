import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
export interface IEventsSliceState {
	allEvents: [];
}

const initialState: IEventsSliceState = {
	allEvents: [],
};

export const eventsSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		setEvents(state, action) {
			state.allEvents = action.payload;
		},
	},
});

export const { setEvents } = eventsSlice.actions;
export const getEvents = (state: AppState) => state.events.allEvents;

export default eventsSlice.reducer;
