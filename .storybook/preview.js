import React from "react";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../src/styles/mainTheme";
import GlobalStyle from "../src/styles/GlobalStyle";

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
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];
