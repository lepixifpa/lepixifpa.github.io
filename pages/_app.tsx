import GlobalStyle from '../styles/globals';
import styled from 'styled-components';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/NavBar';
import NextNProgress from 'nextjs-progressbar';
import '../styles/fonts.css';
import Head from 'next/head';

const StyledFooter = styled.footer`
  color: white;
  font-style: italic;
  margin-top: 4px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LEPIX</title>
        <meta
          name="description"
          content="Nós somos o LEPIX (Laboratório Experimental de Pesquisa em Informática do Xingu), um grupo de estudantes do IFPA Campus Altamira estudando Arduino, Machine Learning e Data Mining"
        />
        <link rel="short icon" href="/logo-round.png" />
      </Head>

      <GlobalStyle />
      <NavBar />
      <NextNProgress />
      <Component {...pageProps} />
      <StyledFooter>&copy; Vitor Koch 2022</StyledFooter>
    </>
  );
}

export default MyApp;
