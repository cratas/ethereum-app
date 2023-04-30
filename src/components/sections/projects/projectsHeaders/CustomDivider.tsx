import React from "react";
import { Divider } from "@mui/material";

export const CustomDivider = ({ bgcolor = "primary.dark" }) => {
  return (
    <Divider
      orientation="vertical"
      sx={{
        height: 30,
        alignSelf: "center",
        width: "3px",
        bgcolor,
        boxShadow: "none",
        border: "none",
        borderRadius: 2,
      }}
    />
  );
};
