import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  gray100: '#E5E5E5',
  primary: '#0F52BA',
}

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
