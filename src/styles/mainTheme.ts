import { createTheme } from "@mui/material/styles";
import { DefaultTheme } from "styled-components";

const MainTheme: DefaultTheme = createTheme({
  codersPalette: {
    brand: {
      base: "#2daae1",
      dark: "#207aa1",
      light: "#73c3e6",
    },
    feedback: {
      success: "#2daae1",
      alert: "#e0435d",
      warning: "#e0d716",
    },
    neutral: {
      mainDark: "#212529",
      mainLight: "#fff",
      secondary: "#91a3b5",
      secondaryDark: "#57626d",
      secondaryLight: "#bdc8d3",
    },
  },
  typography: {
    fontFamily: "Open-Sans, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "4.4rem",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "3rem",
      fontWeight: "700",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "2.5rem",
      fontWeight: "700",
    },
    fontWeightBold: "700",
    fontWeightMedium: "500",
    fontWeightRegular: "400",
    fontWeightLight: "300",
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
      },
    },
  },
});

export default MainTheme;
