import { configureStore } from "@reduxjs/toolkit";
import currentThemeSlice, { name as currentThemeName } from "./loggedUserSlice";

import currentLocationSlice, {
  name as currentLocationName,
} from "./currentLocationSlice";

export const store = configureStore({
  reducer: {
    [currentThemeName]: currentThemeSlice,
    [currentLocationName]: currentLocationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
