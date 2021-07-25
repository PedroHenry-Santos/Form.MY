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
          <meta name="theme-color" content="#C6F6D5" />
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />

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
          <meta
            property="og:image"
            content="https://form-pedrohenry-santos.vercel.app/img/demo.png"
          />
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
          <meta
            property="twitter:image"
            content="https://form-pedrohenry-santos.vercel.app/img/demo.png"
          />
          <meta
            name="description"
            content="Formulário para cadastro de clientes com persistência de dados utilizando o Firebase. Faça cadastros de maneira simples com funcionalidade 'offline'."
          />
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
