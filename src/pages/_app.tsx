
import type {AppProps} from 'next/app';
import '../../styles/bootstrap.min.css';
import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import theme from '@root/common/theme';
import '@fontsource/asap';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
