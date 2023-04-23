import React from "react";
import { Box } from "@mui/system";
import { LogoIcon } from "./LogoIcon";
import { Button } from "@mui/material";

type Props = {};

export const Menu = (props: Props) => {
  return (
    <Box
      sx={{
        p: 2,
        border: "2px solid black",
        borderColor: 'secondary.main',
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center'
      }}
    >
      <Button  variant="outlined" sx={{ backgroundColor: "secondary.main" }}>Home</Button>
      <LogoIcon />
      <Box>
        <Button variant="outlined" sx={{ backgroundColor: "secondary.main" }}>Log In</Button>
      </Box>
    </Box>
  );
};
