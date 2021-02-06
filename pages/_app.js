import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Header from '../src/comopnents/Header';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// Tema de cores e outras propriedades css para o site
const theme = {
  colors: {
    primary: '#ec8b3b',
    secondary: '#436bb2',
    headerMainButtons: '#ec8b3b',
    headerMainBg: '#181818',

    searchBar: '#BBBBBB',
    darkBg: '#181818',
    contrastText: '#87747c',
    wrong: '#f68911',
    success: '#4CAF50',
  },
  fontFamily: 'Lato, sans-serif',
  mediaConfig: {
    wppLink: 'https://web.whatsapp.com/send?phone=5561983157060',
  },
  borderRadius: '8px',
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Senhora Baforada</title>
        <link rel="icon" href="/icon-square.ico" />
        <title>Senhora Baforada</title>
        <meta name="title" content="Senhora Baforada" />
        <meta name="description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/rdaldegan/senhora-baforada" />
        <meta property="og:title" content="Senhora Baforada" />
        <meta property="og:description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />
        <meta property="og:image" content="logo.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://github.com/rdaldegan/senhora-baforada" />
        <meta property="twitter:title" content="Senhora Baforada" />
        <meta property="twitter:description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />
        <meta property="twitter:image" content="logo.jpg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
