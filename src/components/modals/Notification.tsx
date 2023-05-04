import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";
import { Severity } from "../../types";

export type NotificationProps = {
  msg?: string;
  onClose?: () => void;
  severity?: Severity;
};

export const Notification = ({
  msg,
  onClose,
  severity = Severity.INFO,
}: NotificationProps) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(msg !== null);
  }, [msg]);

  const handleClose = (ev: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);

    if (onClose !== undefined) {
      onClose();
    }
  };

  return msg ? (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={severity} sx={{ width: "100%" }} onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  ) : null;
};
