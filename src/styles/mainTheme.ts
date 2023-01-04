import { createTheme } from "@mui/material";
import ThemeOptions from "./ThemeOptions";

const mainTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2daae1",
      dark: "#207aa1",
      light: "#73c3e6",
    },
    secondary: {
      main: "#212529",
      light: "#ffffff",
    },
    grey: {
      "300": "#91a3b5",
      "100": "bdc8d3",
      "500": "#57626d",
    },
    error: {
      main: "#e0435d",
    },
    success: {
      main: "#2daae1",
    },
    warning: {
      main: "e0d716",
    },
  },
  typography: {
    fontFamily: "Open-Sans, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "4.4rem",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "3rem",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "2.5rem",
      fontWeight: 800,
    },
    fontWeightBold: 800,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
  shape: {
    borderRadius: 5,
  },
});

export default mainTheme;
