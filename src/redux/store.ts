import { configureStore } from "@reduxjs/toolkit";
import currentThemeSlice, { name as currentThemeName } from "./loggedUserSlice";
import modalsSlice, { name as modalSliceName } from "./modalsSlice";
import currentLocationSlice, {
  name as currentLocationName,
} from "./currentLocationSlice";

export const store = configureStore({
  reducer: {
    [currentThemeName]: currentThemeSlice,
    [currentLocationName]: currentLocationSlice,
    [modalSliceName]: modalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
