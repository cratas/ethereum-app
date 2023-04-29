import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface SortProps {}

export const Sort = ({}: SortProps) => {
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const handleClick = () => {
    setDirection(direction === "asc" ? "desc" : "asc");
  };

  return (
    <Button
      disableRipple
      startIcon={
        direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
      }
      size="small"
      variant="text"
      onClick={handleClick}
      sx={{
        bgcolor: "primary.light",
        boxShadow: "none",
        textDecoration: "none",
        textTransform: "none",
        mr: 2,
        fontSize: "0.875rem",
        color: "secondary.main",
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
    >
      Sort by date
    </Button>
  );
};
