import { alternarVisibilidadeCompartilhar } from "../App";
import { Rede } from "./Rede";

export const Redes = () => {
  return (
    <div id="redes">
      <Rede
        texto="Github"
        icon="fa-brands fa-github"
        link="https://github.com/lepixifpa"
      />
      <Rede
        texto="Instagram"
        icon="fa-brands fa-instagram"
        link="https://www.instagram.com/lepix.ifpa/"
      />
      <Rede
        texto="E-mail"
        icon="fa-solid fa-envelope"
        link="mailto: ifpalepix@gmail.com"
      />
        <Rede
          texto="Compartilhar"
          icon="fa-solid fa-share"
          click={alternarVisibilidadeCompartilhar}
        />
    </div>
  );
};
