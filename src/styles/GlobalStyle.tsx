import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-text-primary: #212529;
  --heading-font-family: Montserrat, sans-serif;
  --text-font-family: Open-Sans, sans-serif;
  --text-font-size: 1rem;
  --text-heading1-font-size: 4.4rem;
  --text-heading2-font-size: 3rem;
  --text-heading3-font-size: 2.5rem;
  --text-bold-weight: 800;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: var(--text-font-family);
  color: var(--color-text-primary);
}

body {
  margin: 0;
}

button,
textarea,
select {
  font: inherit;
}

ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  overflow-wrap: break-word;
  font-size: var(--heading-font-family);
}

h1 {
  font-family: var(--text-heading1-font-size);
  font-weight: var(--text-bold-weight);
}

h2 {
  font-family: var(--text-heading2-font-size);
  font-weight: var(--text-bold-weight);
}

h3 {
  font-family: var(--text-heading3-font-size);
}

a {
  text-decoration: none;
  color: inherit;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button,
a {
  cursor: pointer;
}
`;

export default GlobalStyle;
