import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logoRound from "../../assets/logo-round.png";

const ImageContainer = styled.div`
  width: 58px;
  height: 58px;
  margin-right: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`;

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  border-bottom: 4px solid white;
  color: white;
  font-size: 18px;
  transition: 250ms;
  flex-wrap: wrap;
  gap: 12px;

  a {
    color: white;
    font-size: 18px;
    transition: 250ms;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
  }

  a:hover {
    color: #41be4a;
    background: linear-gradient(135deg, #41be4a 0%, #53c89d 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    fill: transparent;
  }
`;

export const NavBar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <ImageContainer id="navbarLogo">
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
      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/compartilhar">Compartilhar</Link>
    </StyledNav>
  );
};
