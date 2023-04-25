import { PaletteMode } from "@mui/material";
import { ThemeMode } from "../types";

const getPalette = (mode: PaletteMode = ThemeMode.LIGHT as PaletteMode) => ({
  palette: {
    mode,
    ...(mode === ThemeMode.LIGHT
      ? {
          primary: {
            main: "#fff",
            second: "#DCDCDC",
          },
          secondary: {
            main: "#000",
          },
          background: {
            default: "#fff",
          },
        }
      : {
          primary: {
            main: "#000",
            second: "#2F4F4F",
          },
          secondary: {
            main: "#fff",
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
