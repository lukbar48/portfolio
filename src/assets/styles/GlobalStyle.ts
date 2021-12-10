import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    word-spacing: 1px;
    /* overflow-x: hidden; */
  }
  
  a, button {
    font-family: 'Roboto', sans-serif;
  }

  .App {
    background-color: #121212;
  }
`;
