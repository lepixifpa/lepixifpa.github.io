import Image from "next/image"
import styled from "styled-components"
import logoRound from "../assets/logo-round.png"

const ImageContainer = styled.div`
  width: 58px;
  height: 58px;
  margin-right: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`;

export const NavBar = () => {
  return (
    <nav>
      <a href="body">
        <ImageContainer>
          <Image
            src={logoRound}
            alt=""
            width={64}
            height={64}
            placeholder="blur"
          />
        </ImageContainer>
        Home
      </a>
      <a href="#participantes">Participantes</a>
      <a href="#redes">Redes sociais</a>
    </nav>
  );
};
