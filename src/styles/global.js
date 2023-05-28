import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* PRIMARY */
    --peach: #E7816B;
    --black: #1D1C1E;
    --white: #fff;
    /* SECONDARY */
    --light-peach: #FFAD9B;
    --dark-grey: #333136;
    --light-grey: #F1F3F5;
    --width: 110rem;
    --border-radius: 1.2rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  ul,li {
    list-style: none;
  }
`;

export default GlobalStyles;
