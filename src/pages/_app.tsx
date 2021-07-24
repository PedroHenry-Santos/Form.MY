import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@fontsource/poppins';
import '@fontsource/archivo';
import theme from '../assets/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Form</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <Box d="flex" justifyContent="center" px={10} py={20}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
};
export default MyApp;
