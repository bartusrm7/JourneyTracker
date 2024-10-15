import { createSlice } from "@reduxjs/toolkit";

interface Journey {
	journeyName: string;
}
const initialState: Journey = {
	journeyName: "",
};
const journeySlice = createSlice({
	name: "journey",
	initialState,
	reducers: {},
});
export default journeySlice.reducer;
