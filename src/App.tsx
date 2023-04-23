import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/system";
import { Typography, createTheme } from "@mui/material";
import { SettingsExpander } from "./components/SettingsExpander";
import { ThemeMode } from "./types";
import { getPalette } from "./theme/theme";
import { AppWrapper } from "./components/wrappers/AppWrapper";

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const theme = useMemo(() => getPalette(themeMode), [themeMode]);

  const handleChangeTheme = () => {
    setThemeMode(
      themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper />
      <SettingsExpander changeTheme={handleChangeTheme} />
    </ThemeProvider>
  );
};

export default App;
