import { alternarVisibilidadeCompartilhar } from "../App";

export const ConfigMenu = () => {
  const copiarBtn = document.querySelector("#copiar-url");
  const copiarURL = () => {
        navigator.clipboard.writeText("https://lepixifpa.github.io/");
        copiarBtn instanceof HTMLElement
          ? (copiarBtn.innerText = "Copiado!")
          : console.error();
        setTimeout(() => {
          copiarBtn instanceof HTMLElement
            ? (copiarBtn.innerText = "Copiar")
            : console.error();
        }, 2000);
        console.log("Botão copiar clicado");
  }
  return (
    <div id="compartilhar-bg">
      <div id="compartilhar-container">
        <button type="button" id="fechar-btn" onClick={alternarVisibilidadeCompartilhar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>Link</h3>
        https://lepixifpa.github.io/
        <br />
        <button type="button" id="copiar-url" onClick={copiarURL}>
          Copiar
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
