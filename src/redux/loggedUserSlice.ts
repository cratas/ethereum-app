import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface LoggedUserState {
  loggedUser: string | null;
}

const initialState: LoggedUserState = {
  loggedUser: null,
};

export const name = "loggedUser";

export const currentThemeReducer = createSlice({
  name,
  initialState,
  reducers: {
    setLoggedUser: (state, { payload }) => {
      state.loggedUser = payload;
    },
  },
});

export const { setLoggedUser } = currentThemeReducer.actions;

export const selectLoggedUser = (state: RootState) => state.loggedUser;

export default currentThemeReducer.reducer;
