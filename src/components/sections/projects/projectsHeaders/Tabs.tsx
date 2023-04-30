import React, { useEffect, useState } from "react";
import { Tabs as TabsMUI, Box, Tab, Divider } from "@mui/material";
import { Sort } from "./Sort";
import { CustomTab } from "./CustomTab";
import { CustomDivider } from "./CustomDivider";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

interface TabProps {}

export const Tabs = ({}: TabProps) => {
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Sort />

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


