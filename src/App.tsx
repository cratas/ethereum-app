import { useMemo, useState } from "react";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SettingsExpander } from "./components/SettingsExpander";
import { ThemeMode } from "./types";
import customTheme, { getPalette } from "./theme/theme";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import { Menu } from "./components/Menu";
import { deepmerge } from "@mui/utils";


const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const theme = useMemo(
    () =>
      createTheme(
        deepmerge(getPalette(themeMode), customTheme)
      ),
    [themeMode]
  );

  const handleChangeTheme = () => {
    setThemeMode(
      themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Menu />
      </AppWrapper>
      <SettingsExpander changeTheme={handleChangeTheme} />
    </ThemeProvider>
  );
};

export default App;
