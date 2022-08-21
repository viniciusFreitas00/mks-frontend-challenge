import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../styles/theme.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>MKS - Desenvolvimento de Sistemas</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
