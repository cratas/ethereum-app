import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ModalTypes, Severity } from "../types";

export interface NotificationsState {
  snackBarMsg: string | null;
  snackBarSeverity: string;
}

const initialState: NotificationsState = {
  snackBarMsg: null,
  snackBarSeverity: Severity.INFO,
};

export const name = "notifications";

export const notificationsReducer = createSlice({
  name,
  initialState,
  reducers: {
    setSnackBar: (state, { payload }) => {
      state.snackBarMsg = payload?.msg ?? null;
      state.snackBarSeverity = payload?.severity ?? Severity.INFO;
    },
  },
});

export const { setSnackBar } = notificationsReducer.actions;

export const selectSnackBarNotification = (state: RootState) =>
  state.notifications;
export const selectSnackBarMsg = (state: RootState) =>
  state.notifications.snackBarMsg;
export const selectSnackBarSeverity = (state: RootState) =>
  state.notifications.snackBarSeverity;

export default notificationsReducer.reducer;
