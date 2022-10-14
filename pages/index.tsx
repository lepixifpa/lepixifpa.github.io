import type { NextPage } from 'next'
import Head from 'next/head'
import { Descricao } from '../components/Descricao'
import { Redes } from '../components/Redes'
import { Participantes } from '../components/Participantes'

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
    </div>
  );
}
export default Home;

