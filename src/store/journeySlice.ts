import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Journey {
	journeyName: string;
	structures: {
		travelPlanArray: string[];
		mustHaveItemsArray: string[];
		bugdetAndCostsArray: string[];
		photosAndMemoriesArray: string[];
	};
}
interface JourneyState {
	journey: Journey[];
	isJourneyNameExistings: boolean;
}
const initialState: JourneyState = {
	journey: [],
	isJourneyNameExistings: false,
};
const journeySlice = createSlice({
	name: "journey",
	initialState,
	reducers: {
		setAddJourneyDataContainer: (state, action: PayloadAction<string>) => {
			const newJourney: Journey = {
				journeyName: action.payload,
				structures: {
					travelPlanArray: [],
					mustHaveItemsArray: [],
					bugdetAndCostsArray: [],
					photosAndMemoriesArray: [],
				},
			};
			state.journey.push(newJourney);
			state.isJourneyNameExistings = true;
		},
	},
});

export const { setAddJourneyDataContainer } = journeySlice.actions;
export default journeySlice.reducer;
