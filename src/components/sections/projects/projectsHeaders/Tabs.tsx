import React, { useState } from "react";
import { Tabs as TabsMUI, Box, Tab, Divider } from "@mui/material";
import { Sort } from "./Sort";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

interface TabProps {}

export const Tabs = ({}: TabProps) => {
  const [value, setValue] = useState(0);

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

const CustomTab = ({ ...props }) => {
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

const CustomDivider = ({ bgcolor = "primary.dark" }) => {
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
