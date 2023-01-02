import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      brandBase: "#2daae1",
      brandDark: "#207aa1",
      brandLight: "#73c3e6",
    },
    ink: {
      mainDark: "#212529",
      mainLight: "#ffffff",
      secondary: "#91a3b5",
      secondaryDark: "#57626d",
      secondaryLight: "bdc8d3",
    },
    error: {
      base: "#e0435d",
    },
    success: {
      base: "#2daae1",
    },
    warning: {
      base: "e0d716",
    },
  },
  borderRadius: {
    small: "5px",
  },
  padding: {
    horizontal: "15px",
    vertical: "15px",
  },
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
};

export default mainTheme;
