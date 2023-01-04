declare module "@mui/material/styles" {
  interface ThemeOptions {
    palette: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        light: string;
      };
      grey: {
        "300": string;
        "100": string;
        "500": string;
      };
      error: {
        main: string;
      };
      success: {
        main: string;
      };
      warning: {
        main: string;
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
}

export default ThemeOptions;
