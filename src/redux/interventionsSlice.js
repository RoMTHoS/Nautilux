import { createSlice } from "@reduxjs/toolkit";

export const interventionsSlice = createSlice({
  name: "interventions",
  initialState: {
    interventions: [],
    isLoading: false,
  },
  reducers: {
    getInterventionsFetch: (state) => {
      state.isLoading = true;
    },
    getInterventionsSuccess: (state, action) => {
      state.interventions = action.payload;
      state.isLoading = false;
    },
    getInterventionsFailure: (state) => {
      state.isLoading = false;
    },
    addNewIntervention: (state, action) => {
      state.interventions = [...state.interventions, action.payload];
      console.log(state.interventions);
    },
  },
});

export const {
  getInterventionsFetch,
  getInterventionsSuccess,
  getInterventionsFailure,
  addNewIntervention,
} = interventionsSlice.actions;

export default interventionsSlice.reducer;
