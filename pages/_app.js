import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

import commerce from '../src/commerce';

import SideMenu from '../src/comopnents/SideMenu';
import Header from '../src/comopnents/Header';
import Footer from '../src/comopnents/Footer';

// Tema de cores e outras propriedades css para o site
const theme = {
  colors: {
    primary: '#ec8b3b',
    secondary: '#436bb2',
    headerMainButtons: '#ec8b3b',
    headerMainBg: '#181818',
    headerTopBg: '#222222',
    headerBottomBg: '#181818',

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
  maxWidth: '1600px',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    :focus{
      outline: none;
    }
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: ${theme.fontFamily};
    
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  #nprogress .bar {
    background: ${theme.colors.primary} !important;
  }
`;

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  /* const [cart, setCart] = useState({});

  async function fetchCart() {
    setCart(await commerce.cart.retrieve());
  }

  useEffect(() => {
    fetchCart();
  }, []);

  console.log(cart); */

  return (
    <>
      <Head>
        <title>Senhora Baforada</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="title" content="Senhora Baforada" />
        <meta name="description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://senhora-baforada-git-main.rdaldegan.vercel.app/" />
        <meta property="og:title" content="Senhora Baforada" />
        <meta property="og:description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />
        <meta property="og:image" content="/logo-black.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://senhora-baforada-git-main.rdaldegan.vercel.app/" />
        <meta property="twitter:title" content="Senhora Baforada" />
        <meta property="twitter:description" content="Charutos, tabacos naturais, cachimbos, rapés, acessórios e muito mais." />
        <meta property="twitter:image" content="/logo-black.jpg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SideMenu />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
