import { useState } from "react";
import { alternarVisibilidadeCompartilhar } from "../pages/index";
import Image from "next/image"

export const ConfigMenu = () => {
  const [textoCopiarURL, setTextoCopiarURL] = useState("Copiar");

  const copiarURL = () => {
    navigator.clipboard.writeText("https://lepixifpa.github.io/");
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
        https://lepixifpa.github.io/
        <br />
        <button type="button" id="copiar-url" onClick={copiarURL}>
          {textoCopiarURL}
        </button>
        <h3>QR Code</h3>

        <div style={{aspectRatio: 1, width: "50%", borderRadius: 18, position: "relative", margin: "auto"}}>
          <Image src={require("../assets/qrcode.png")} alt="" placeholder="blur" layout="fill" objectFit="cover"/>
        </div>
        <br />
      </div>
    </div>
  );
};
