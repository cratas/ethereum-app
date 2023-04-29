import React from "react";
import { Box } from "@mui/material";
import { SearchBox } from "../SearchBox";
import { Tabs } from "./Tabs";
import { Sort } from "./Sort";

interface ProjectsHeaderProps {
  onSearchChange?: (value: string) => void;
}

export const ProjectsHeader = ({ onSearchChange }: ProjectsHeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "primary.light",
        borderRadius: 2,
        px: 1,
        mb: 1,
        pr: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SearchBox
        placeholder="Search by title or owner address"
        width={410}
        onSearchChange={onSearchChange}
      />
      <Tabs />
    </Box>
  );
};
