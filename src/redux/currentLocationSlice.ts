import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Locations } from "../types";


export interface CurrentLocationState {
  currentLocation: Locations
}

const initialState: CurrentLocationState = {
    currentLocation: Locations.PROJECTS
};

export const name = "currentLocation";

export const currentLocationReducer = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentLocation: (state, { payload }) => {
      state.currentLocation = payload;
    },
  },
});

export const { setCurrentLocation } = currentLocationReducer.actions;

export const selectCurrentLocation = (state: RootState) => state.currentLocation;

export default currentLocationReducer.reducer;
