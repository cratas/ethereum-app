import { Tab } from "@mui/material";
import React from "react";

export const CustomTab = ({ ...props }) => {
  return (
    <Tab
      disableRipple
      {...props}
      sx={{
        color: "primary.ultralight",
        textDecoration: "none",
        textTransform: "none",
        "&.Mui-selected": {
          color: "secondary.main",
        },
        "&:hover": {
          color: "text.secondary",
        },
        "&:focus": {
          color: "secondary.main",
        },
      }}
    />
  );
};
