import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ModalTypes } from "../types";

export interface ModalsState {
  type: ModalTypes | null;
  props:
    | {
        contentMessage?: React.ReactNode;
        open: boolean;
        title?: string;
      }
    | {};
}

const initialState: ModalsState = {
  type: null,
  props: {},
};

export const name = "modals";

export const modalsReducer = createSlice({
  name,
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      return { ...payload };
    },
    hideModal: (state) => {
      return initialState;
    },
  },
});

export const { showModal, hideModal } = modalsReducer.actions;

export const showProfileModal = (props: any) =>
  showModal({ type: ModalTypes.PROFILE, props });

export const selectType = (state: RootState) => state.modals.type;
export const selectProps = (state: RootState) => state.modals.props;

export default modalsReducer.reducer;
