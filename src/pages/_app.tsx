import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@fontsource/poppins';
import '@fontsource/archivo';
import theme from '../assets/styles/theme';
import { GlobalProcessesContextProvider } from '../contexts/globalProcessContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>For.MY</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <GlobalProcessesContextProvider>
          <Box d={{ md: 'flex' }} justifyContent={{ md: 'center' }} px="5px">
            <Component {...pageProps} />
          </Box>
        </GlobalProcessesContextProvider>
      </ChakraProvider>
    </>
  );
};
export default MyApp;
