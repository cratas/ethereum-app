import { useMemo, useState } from "react";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SettingsExpander } from "./components/SettingsExpander";
import { ThemeMode } from "./types";
import customTheme, { getPalette } from "./theme/theme";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import { Menu } from "./components/menu/Menu";
import { deepmerge } from "@mui/utils";
import { createContext, useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Sections } from "./components/sections/Sections";
import { MetaMaskChecker } from "./components/wrappers/MetaMaskChecker";
import { ModalProvider } from "./components/wrappers/ModalProvider";
import SnackBarHandler from "./components/wrappers/SnackBarHandler";

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const theme = useMemo(
    () => createTheme(deepmerge(getPalette(themeMode), customTheme)),
    [themeMode]
  );

  const handleChangeTheme = () => {
    setThemeMode(
      themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MetaMaskChecker>
          <AppWrapper>
            <ModalProvider />
            <SnackBarHandler />
            <Menu />
            <Sections />
          </AppWrapper>
        </MetaMaskChecker>
        <SettingsExpander changeTheme={handleChangeTheme} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
