import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      base: "#2daae1",
      baseDark: "#207aa1",
      baseLight: "#73c3e6",
    },
    neutrals: {
      mainDark: "#212529",
      mainLight: "#ffffff",
      base: "#91a3b5",
      baseDark: "#57626d",
      baseLight: "bdc8d3",
    },
    feedback: {
      error: "#e0435d",
      success: "#2daae1",
      warning: "e0d716",
    },
  },
  borderRadius: {
    small: "5px",
  },
  padding: {
    horizontal: "15px",
    vertical: "15px",
  },
  fontWeight: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
  fontFamily: {
    text: "Open-Sans, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontSize: {
    h1: "4.4rem",
    h2: "3rem",
    h3: "2.5rem",
    text: "1rem",
  },
};

export default mainTheme;
