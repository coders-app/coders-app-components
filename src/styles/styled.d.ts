import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        baseDark: string;
        baseLight: string;
      };
      neutrals: {
        mainDark: string;
        mainLight: string;
        base: string;
        baseDark: string;
        baseLight: string;
      };
      feedback: {
        error: string;
        success: string;
        warning: string;
      };
    };
    borderRadius: {
      small: string;
    };
    padding: {
      horizontal: string;
      vertical: string;
    };
    fontWeight: {
      bold: number;
      semiBold: number;
      medium: number;
      regular: number;
      light: number;
    };
    fontFamily: {
      text: string;
      heading: string;
    };
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      text: string;
    };
  }
}
