import React, { useState } from "react";
import { Tabs as TabsMUI, Box } from "@mui/material";
import { Sort } from "./Sort";
import { CustomTab } from "./CustomTab";
import { CustomDivider } from "./CustomDivider";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

interface TabProps {
  onSortItems: (direction: string) => void;
  onFilterModeChange: (mode: number) => void;
}

export const Tabs = ({ onSortItems, onFilterModeChange }: TabProps) => {
  const [value, setValue] = useState<number>(1);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onFilterModeChange(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Sort onSortItems={onSortItems} />

      <TabsMUI
        value={value}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        indicatorColor={"" as "secondary" | "primary"}
      >
        <CustomDivider />
        <CustomTab label="All" {...a11yProps(0)} />
        <CustomDivider />
        <CustomTab label="Contributed" {...a11yProps(1)} />
        <CustomDivider />
        <CustomTab label="Completed" {...a11yProps(2)} />
        <CustomDivider />
        <CustomTab label="Unsuccessfully completed" {...a11yProps(3)} />
      </TabsMUI>
    </Box>
  );
};
