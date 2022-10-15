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
          rel="short icon"
          href="/logo-round.png"
        />
      </Head>

      <Descricao />
      <Redes />
      <Participantes />
    </div>
  );
}
export default Home;

