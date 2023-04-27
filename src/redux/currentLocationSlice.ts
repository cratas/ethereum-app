import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Locations } from "../types";

export interface CurrentLocationState {
  currentLocation: {
    location: Locations;
    props: any;
  };
}

const initialState: CurrentLocationState = {
  currentLocation: {
    location: Locations.PROJECTS,
    props: {},
  },
};

export const name = "currentLocation";

export const currentLocationReducer = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentLocation: (state, { payload: { location, props } }) => {
      state.currentLocation.location = location;
      state.currentLocation.props = props ?? {};
    },
  },
});

export const { setCurrentLocation } = currentLocationReducer.actions;

export const selectCurrentLocation = (state: RootState) =>
  state.currentLocation.currentLocation;

export default currentLocationReducer.reducer;
