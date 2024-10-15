import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Journey {
	journeyName: string;
}
const initialState: Journey = {
	journeyName: "",
};
const journeySlice = createSlice({
	name: "journey",
	initialState,
	reducers: {
		addJourneyName: (state, action: PayloadAction<string>) => {
			state.journeyName = action.payload;
		},
	},
});

export const { addJourneyName } = journeySlice.actions;
export default journeySlice.reducer;
