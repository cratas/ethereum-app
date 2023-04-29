import { PaletteMode } from "@mui/material";
import { ThemeMode } from "../types";

const getPalette = (mode: PaletteMode = ThemeMode.LIGHT as PaletteMode) => ({
  palette: {
    mode,
    ...(mode === ThemeMode.LIGHT
      ? {
          primary: {
            main: "#fff",
            light: "#eeeeee",
            dark: "#e0e0e0",
            ultralight: "#bdbdbd",
          },
          secondary: {
            main: "#000",
            light: "#424242",
            dark: "#212121",
          },
          background: {
            default: "#fff",
          },
        }
      : {
          primary: {
            main: "#000",
            light: "#424242",
            dark: "#212121",
            ultralight: "#757575",
          },
          secondary: {
            main: "#fff",
            light: "#eeeeee",
            dark: "#e0e0e0",
          },
          background: {
            default: "#000",
          },
        }),
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const { palette } = getPalette();

const customTheme = {
  components: {
    MuButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: palette.primary.main,
          bgcolor: palette.secondary.main,
        },
      },
    },
  },
};

export { getPalette };

export default customTheme;
