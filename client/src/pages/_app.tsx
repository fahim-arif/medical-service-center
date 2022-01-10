import type {AppProps} from 'next/app';
import '@public/styles/globals.css';
import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import theme from '@root/common/theme';
import '@fontsource/asap';
import "../../public/styles/style.css"
import "../../public/styles/bootstrap.min.css"
import Script from 'next/script';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      
      <CSSReset />
      <Component {...pageProps} />
      <Script src='/js/app.js'></Script>
    </ChakraProvider>
  );
}

export default MyApp;
