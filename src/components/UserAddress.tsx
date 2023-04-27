import { Tooltip, Typography } from "@mui/material";
import React from "react";

interface UserAddressProps {
  address: string;
}

export const UserAddress = ({ address }: UserAddressProps) => {
  return (
    <Tooltip
      title="Copy to clipboard"
      arrow
      placement="top-start"
      onClick={() => {
        navigator.clipboard.writeText(address);
      }}
    >
      <Typography
        variant="inherit"
        sx={{
          color: "secondary.main",
          cursor: "pointer",
        }}
      >
        {address}
      </Typography>
    </Tooltip>
  );
};
