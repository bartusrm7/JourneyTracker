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
	isTaskDone: boolean[];
}
const initialState: JourneyState = {
	journey: [],
	isJourneyNameExistings: false,
	isTaskDone: [],
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
		setAddTravelPlan: (state, action: PayloadAction<{ journeyPlan: string; indexJourney: number }>) => {
			const { journeyPlan, indexJourney } = action.payload;
			if (state.journey[indexJourney]) {
				state.journey[indexJourney].structures.travelPlanArray.push(journeyPlan);
			}
		},
		setAddMustHaveItems: (state, action: PayloadAction<{ journeyThings: string; indexJourney: number }>) => {
			const { journeyThings, indexJourney } = action.payload;
			if (state.journey[indexJourney]) {
				state.journey[indexJourney].structures.mustHaveItemsArray.push(journeyThings);
			}
		},
		setBugdetAndCosts: (state, action: PayloadAction<{ journeyBudget: string; indexJourney: number }>) => {
			const { journeyBudget, indexJourney } = action.payload;
			if (state.journey[indexJourney]) {
				state.journey[indexJourney].structures.bugdetAndCostsArray.push(journeyBudget);
			}
		},
		setPhotosAndMemories: (state, action: PayloadAction<{ journeyMemories: string; indexJourney: number }>) => {
			const { journeyMemories, indexJourney } = action.payload;
			if (state.journey[indexJourney]) {
				state.journey[indexJourney].structures.photosAndMemoriesArray.push(journeyMemories);
			}
		},
		setMarkTaskDone: (state, action: PayloadAction<{ taskDone: boolean; indexTask: number }>) => {
			const { taskDone, indexTask } = action.payload;
			if (state.isTaskDone[indexTask]) {
				state.isTaskDone[indexTask] = taskDone;
			}
		},
	},
});

export const {
	setAddJourneyDataContainer,
	setAddTravelPlan,
	setAddMustHaveItems,
	setBugdetAndCosts,
	setPhotosAndMemories,
	setMarkTaskDone,
} = journeySlice.actions;
export default journeySlice.reducer;
