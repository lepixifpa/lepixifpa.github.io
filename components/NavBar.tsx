import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logoRound from "../assets/logo-round.png";

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
      <Link href="/">
        <a href="#">
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
      </Link>
      <a href="#participantes">Participantes</a>
      <a href="#redes">Redes Sociais</a>
    </nav>
  );
};
