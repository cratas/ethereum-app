import React from "react";
import { Box } from "@mui/material";
import { SearchBox } from "./SearchBox";

interface ProjectsHeaderProps {
  onSearchChange?: (value: string) => void;
}

export const ProjectsHeader = ({onSearchChange}: ProjectsHeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "primary.dark",
        p: 1,
        borderRadius: 2,
        mb: 1,
      }}
    >
      <SearchBox
        placeholder="Search by title"
        width={240}
        onSearchChange={onSearchChange}
      />
    </Box>
  );
};
