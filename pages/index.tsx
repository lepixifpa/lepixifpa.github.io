import type { NextPage } from "next";
import { Descricao } from "../components/Descricao";
import { Redes } from "../components/Redes";
import { Participantes } from "../components/Participantes";

const Home: NextPage = () => {
  return (
    <>
      <Descricao />
      <Redes />
      <Participantes />
    </>
  );
};
export default Home;
