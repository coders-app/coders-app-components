import "styled-components";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends CodersTheme {}
  interface ThemeOptions extends CodersTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export interface CodersTheme {
  codersPalette: {
    brand: {
      base: string;
      light: string;
      dark: string;
    };
    neutral: {
      mainDark: string;
      secondaryDark: string;
      secondary: string;
      secondaryLight: string;
      mainLight: string;
    };
    feedback: {
      success: string;
      warning: string;
      alert: string;
    };
  };
  typography: {
    fontFamily: string;
    h1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    h2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    h3: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
    fontWeightBold: number;
    fontWeightMedium: number;
    fontWeightRegular: number;
    fontWeightLight: number;
  };
  shape: {
    borderRadius: number;
  };
}
