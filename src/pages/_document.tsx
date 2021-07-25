import React from 'react';

import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import theme from '../assets/styles/theme';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta name="For.MY" content="For.MY" />
          <meta name="theme-color" content="#48BB78" />
          <meta
            name="author"
            content="https://github.com/PedroHenry-Santos"
          ></meta>

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://form-pedrohenry-santos.vercel.app/"
          />
          <meta property="og:title" content="For.MY" />
          <meta
            property="og:description"
            content="Formulário para cadastro de clientes com persistência de dados utilizando o Firebase. Faça cadastros de maneira simples com funcionalidade 'offline'."
          />
          <meta property="og:image" content="/img/demo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://form-pedrohenry-santos.vercel.app/"
          />
          <meta property="twitter:title" content="For.MY" />
          <meta
            property="twitter:description"
            content="Formulário para cadastro de clientes com persistência de dados utilizando o Firebase. Faça cadastros de maneira simples com funcionalidade 'offline'."
          />
          <meta property="twitter:image" content="/img/demo.png" />

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
            content="Formulário para cadastro de clientes com persistência de dados utilizando o Firebase. Faça cadastros de maneira simples com funcionalidade 'offline'."
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
