import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Descricao } from '../components/Descricao'
import { Redes } from '../components/Redes'
import { Participantes } from '../components/Participantes'
import { ConfigMenu } from '../components/ConfigMenu'
import { NavBar } from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LEPIX</title>
        <meta
          name="description"
          content="Nós somos o LEPIX (Laboratório Experimental de Pesquisa em Informática do Xingu), um grupo de estudantes do IFPA Campus Altamira estudando Arduino, Machine Learning e Data Mining"
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/lepixifpa/lepixifpa/main/logo-round.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Descricao />
      <Redes />
      <Participantes />
      <ConfigMenu />
    </div>
  );
}
export default Home;

export const alternarVisibilidadeCompartilhar = () => {
  const compartilharBg = document.querySelector("#compartilhar-bg");
  const statusBg =
    compartilharBg instanceof HTMLElement
      ? window.getComputedStyle(compartilharBg).display
      : "";
  console.log({ statusBg });
  switch (statusBg) {
    case "none":
      compartilharBg instanceof HTMLElement
        ? (compartilharBg.style.display = "block")
        : console.error();
      break;
    case "block":
      compartilharBg instanceof HTMLElement
        ? (compartilharBg.style.display = "none")
        : console.error();
      break;
  }
}
