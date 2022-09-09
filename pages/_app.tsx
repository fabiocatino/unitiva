import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "organisms/Layout";
import GlobalStyle from "resources/styles";
import { DefaultTheme, ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "redux/features/api/productsApi";

const theme: DefaultTheme = {
  colors: {
    primary: "#000",
    secondary: "#5f5a5c",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={productsApi}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0"
          />
          <meta charSet="utf-8" />
          <title>Unitiva store</title>
        </Head>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default MyApp;
