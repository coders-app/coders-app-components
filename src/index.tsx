import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
