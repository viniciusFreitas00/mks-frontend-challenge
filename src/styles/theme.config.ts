import { createGlobalStyle } from "styled-components";

export const theme = {
  white: "#FFFFFF",
  gray100: "#E5E5E5",
  black: '#000000',
  primary: "#0F52BA",
};

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${theme.gray100};
  }
`;
