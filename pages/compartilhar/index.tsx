import { useState } from "react";
import Image from "next/image";
import { LinkContainer } from "./styles";


const Compartilhar = () => {
  const [textoCopiarURL, setTextoCopiarURL] = useState("Copiar");

  const copiarURL = () => {
    navigator.clipboard.writeText(window?.location.href);
    setTextoCopiarURL("Copiado!");
    setTimeout(() => {
      setTextoCopiarURL("Copiar");
    }, 2000);
  };
  return (
    <>
      <h3>Link</h3>
      <LinkContainer>{window?.location.href}</LinkContainer>
      <button type="button" id="copiar-url" onClick={copiarURL}>
        {textoCopiarURL}
      </button>
      <h3>QR Code</h3>

      <div
        style={{
          aspectRatio: 1,
          width: "480px",
          maxWidth: "90%",
          borderRadius: 18,
          position: "relative",
          margin: "auto",
        }}
      >
        <Image
          src={require("../../assets/qrcode.png")}
          alt=""
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default Compartilhar;
