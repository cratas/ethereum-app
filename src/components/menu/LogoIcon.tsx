import React from "react";
import logo from "../../assets/logo.png";
import { Box } from "@mui/material";

export const LogoIcon = () => {
  return (
    <Box sx={{ width: "10%", textAlign: "center" }}>
      <img src={logo} alt="Logo" width={60} />
    </Box>
  );
};
