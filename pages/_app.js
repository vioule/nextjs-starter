import App from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styled-components/Theme";
import ResetStyle from "../styled-components/Reset";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
