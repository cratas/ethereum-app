import { Box } from "@mui/system";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeMode } from "../types";

interface SettingsExpanderProps {
  changeTheme: () => void;
}

export const SettingsExpander = ({ changeTheme }: SettingsExpanderProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: "50%",
        right: "0",
        cursor: "pointer",
        transform: "translateY(-50%)",
        backgroundColor: "secondary.main",
        p: 0.9,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex: 10000
      }}
      onClick={() => {
        changeTheme();
      }}
    >
      <Brightness4Icon sx={{ color: "primary.main" }} />
    </Box>
  );
};
