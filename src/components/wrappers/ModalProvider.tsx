import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectProps, selectType } from "../../redux/modalsSlice";
import { modals } from "../../types";

export const ModalProvider = () => {
  const modalType = useSelector(selectType);
  const modalProps = useSelector(selectProps, shallowEqual);

  const Modal = modalType ? modals[modalType] : null;

  return Modal ? <Modal {...modalProps} /> : null;
};
