import React from "react";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import { CssBaseline, ThemeProvider } from "@mui/material";
import mainTheme from "../src/styles/mainTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
