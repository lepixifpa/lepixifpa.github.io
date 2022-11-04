import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/logo.png";
import logoRound from "../assets/logo-round.png";

const ImageContainer = styled.div`
  display: flex;
  aspect-ratio: 1;
  width: 30%;
  margin-left: -8px;
  position: relative;
  border-radius: 50%;
  border: 4px solid white;
`;

export const Descricao = () => {
  return (
    <div id="container-descricao">
        <ImageContainer>
          <Image
            src={logo}
            alt=""
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            style={{borderRadius: "50%"}}
            quality={100}
          />
        </ImageContainer>
      <div id="descricao">
        <h3 style={{fontFamily:"JetBrains Mono"}}>Quem somos?</h3>
        <p style={{fontFamily:"JetBrains Mono"}}>
          Nós somos o LEPIX (Laboratório Experimental de Pesquisa em Informática
          do Xingu), um grupo de estudantes do IFPA Campus Altamira estudando
          Arduino, Machine Learning e Data Mining
        </p>
      </div>
    </div>
  );
};
