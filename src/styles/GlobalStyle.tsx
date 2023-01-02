import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
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