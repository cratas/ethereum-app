import React from "react";
import { Box } from "@mui/system";
import { LogoIcon } from "./LogoIcon";
import { Links } from "./Links";
import { UserMenu } from "./UserMenu";

export const Menu = () => {
  return (
    <Box
      sx={{
        px: 3,
        py: 1,
        border: "2px solid black",
        borderColor: "secondary.main",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Links />
      <LogoIcon />
      <UserMenu />
    </Box>
  );
};
