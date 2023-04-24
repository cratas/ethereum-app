import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSnackBarNotification, setSnackBar } from '../../redux/notificationsSlice';
import { Notification } from '../modals/Notification';
import { Severity } from '../../types';

const SnackBarHandler = () => {
  const { snackBarMsg, snackBarSeverity } = useSelector(selectSnackBarNotification) ?? {};
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setSnackBar({}));

  return <Notification msg={snackBarMsg as string} severity={snackBarSeverity as Severity} onClose={handleClose} />;
};

export default SnackBarHandler;
