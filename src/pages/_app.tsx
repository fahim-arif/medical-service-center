import type {AppProps} from 'next/app';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../../styles/bootstrap.min.css';
import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import theme from '@root/common/theme';
import '@fontsource/asap';
import '../../styles/index.css';
import '../../public/styles/style.css';
// import "../../public/styles/bootstrap.min.css"
import '../../styles/bootstrap.min.css';
import '../../styles/Signin.css';
import {Provider} from 'react-redux';
import store from '../../src/store';
import {CommentProvider} from '@root/context/CommentContext';
import Script from 'next/script';
import '../../styles/globals.css';
import '../../styles/checkoutPayment.css';
import '../../styles/checkoutPlaceOrder.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <CommentProvider>
      <Script src="/js/app.js"></Script>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </CommentProvider>
  );
}

export default MyApp;
