import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Poppins',
    body: 'Archivo'
  },
  breakpoints: {
    sm: null,
    md: '750px',
    lg: null,
    xl: '1366px'
  },
  styles: {
    global: {
      body: {
        bg: 'green.100'
      }
    }
  }
});

export default theme;
