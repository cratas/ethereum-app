import { ThemeMode } from "../types";
import { PaletteMode } from "@mui/material";

const lightPalette = {
  mode: "light" as PaletteMode,
  primary: {
    main: "#ffffff",
  },
  secondary: {
    main: "#000000",
  },
  background: {
    default: "#ffffff",
  },
};

const darkPalette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#000000",
  },
  secondary: {
    main: "#ffffff",
  },
  background: {
    default: "#000000",
  },
};

export const getPalette = (mode: PaletteMode = ThemeMode.LIGHT as PaletteMode) => ({
  palette: {
    ...(mode === ThemeMode.LIGHT ? lightPalette : darkPalette),
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
});



