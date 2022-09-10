import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import Layout from "./components/organisms/Layout";
import "./index.css";
import { store } from "./redux/store";
import GlobalStyle from "./resources/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme: DefaultTheme = {
  colors: {
    primary: "#000",
    secondary: "#5f5a5c",
  },
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
