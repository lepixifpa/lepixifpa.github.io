import GlobalStyle from "../styles/globals";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import NextNProgress from "nextjs-progressbar"

const StyledFooter = styled.footer`
  color: white;
  font-style: italic;
  margin-top: 4px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <NextNProgress />
      <Component {...pageProps} />
      <StyledFooter>&copy; Vitor Koch 2022</StyledFooter>
    </>
  );
}

export default MyApp;
