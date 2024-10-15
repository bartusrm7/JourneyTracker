import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JourneyState {
	journey: {
		journeyName: string[];
		travelPlanArray: string[];
		mustHaveItemsArray: string[];
		bugdetAndCostsArray: string[];
		photosAndMemoriesArray: string[];
	};
}
const initialState: JourneyState = {
	journey: {
		journeyName: [],
		travelPlanArray: [],
		mustHaveItemsArray: [],
		bugdetAndCostsArray: [],
		photosAndMemoriesArray: [],
	},
};
const journeySlice = createSlice({
	name: "journey",
	initialState,
	reducers: {
		addJourneyName: (state, action: PayloadAction<string>) => {
			state.journey.journeyName.push(action.payload);
		},
		addWholeContainer: (state, action: PayloadAction<string>) => {},
	},
});

export const { addJourneyName } = journeySlice.actions;
export default journeySlice.reducer;
