import React from 'react';

import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import theme from '../assets/styles/theme';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="Boilerplate NextJS" content="Boilerplate NextJS" />
          <meta name="theme-color" content="#5e60ce" />

          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href="/img/icon-128.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/img/icon-256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/img/icon-512.png"
          />
          <meta
            name="description"
            content="Boilerplate project to start a project with nextjs, react, typescript and styled-components"
          />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
