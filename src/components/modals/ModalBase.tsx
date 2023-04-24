import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  Box,
  DialogActions,
  DialogContent,
  Typography,
  IconButton,
  DialogTitle,
} from "@mui/material";
import React from "react";

export interface ModalBaseProps {
  children?: React.ReactNode;
  onCloseModal?: () => void;
  title?: string | React.ReactNode;
}

export const ModalBase = ({
  title,
  children,
  onCloseModal,
}: ModalBaseProps) => {
  const closeDialog = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Esc") {
      closeDialog();
    }
  };

  return (
    <Dialog
      open
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      onClose={closeDialog}
      onKeyDown={handleKeyPress}
    >
      <Box
        sx={{
          p: 2,
          // maxwidth: "50rem",
        }}
      >
        <IconButton
          color="inherit"
          sx={{
            position: "absolute",
            right: "1rem",
            top: "1.8rem",
          }}
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            textAlign: "center",
          }}
        >
          <Typography component="div" sx={{ fontSize: 25, fontWeight: "bold" }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
};
