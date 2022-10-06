import { useState } from "react";
import styled from "styled-components";
import { alternarVisibilidadeCompartilhar } from "../pages/index";
import Image from "next/image"


const LinkContainer = styled.span`
  background-color: rgba(255, 255, 255, .8);
  color: black;
  padding: 8px;
  border-radius: 12px;
  display: inline-block;
  word-wrap: break-word;
  margin: 8px;
`

export const ConfigMenu = () => {
  const [textoCopiarURL, setTextoCopiarURL] = useState("Copiar");

  const copiarURL = () => {
    navigator.clipboard.writeText("https://lepix.vercel.app/");
    setTextoCopiarURL("Copiado!");
    setTimeout(() => {
      setTextoCopiarURL("Copiar");
    }, 2000);
  };
  return (
    <div id="compartilhar-bg">
      <div id="compartilhar-container">
        <button
          type="button"
          id="fechar-btn"
          onClick={alternarVisibilidadeCompartilhar}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>Link</h3>
        <LinkContainer>https://lepix.vercel.app/</LinkContainer>
        <button type="button" id="copiar-url" onClick={copiarURL}>
          {textoCopiarURL}
        </button>
        <h3>QR Code</h3>

        <div
          style={{
            aspectRatio: 1,
            width: "50%",
            borderRadius: 18,
            position: "relative",
            margin: "auto",
          }}
        >
          <Image
            src={require("../assets/qrcode.png")}
            alt=""
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <br />
      </div>
    </div>
  );
};
