import { useState } from "react";
import { alternarVisibilidadeCompartilhar } from "../pages/index";

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
        <img
          src="https://raw.githubusercontent.com/lepixifpa/lepixifpa.github.io/main/qrcode.png"
          alt="QR Code"
          id="qr-code"
          width="50%"
        />
        <br />
      </div>
    </div>
  );
};
