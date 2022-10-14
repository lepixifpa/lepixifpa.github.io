import { useState } from "react";
import Image from "next/image";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";

import { LinkContainer, RedesSociaisContainer } from "./styles";

const Compartilhar = () => {
  const [textoCopiarURL, setTextoCopiarURL] = useState("Copiar");
  const webLink = "https://lepix.vercel.app"
  const compartilharMsg = "Conheça o LEPIX!";

  const copiarURL = () => {
    navigator.clipboard.writeText(webLink);
    setTextoCopiarURL("Copiado!");
    setTimeout(() => {
      setTextoCopiarURL("Copiar");
    }, 2000);
  };
  return (
    <>
      <h3>Link</h3>
      <LinkContainer>{webLink}</LinkContainer>
      <button type="button" id="copiar-url" onClick={copiarURL}>
        {textoCopiarURL}
      </button>
      <RedesSociaisContainer>
        <WhatsappShareButton url={webLink} title={compartilharMsg}>
          WhatsApp
        </WhatsappShareButton>

        <FacebookShareButton url={webLink} title={compartilharMsg}>
          Facebook
        </FacebookShareButton>

        <TwitterShareButton url={webLink} title={compartilharMsg}>
          Twitter
        </TwitterShareButton>

        <EmailShareButton url={webLink} title={compartilharMsg}>
          Email
        </EmailShareButton>

        <TelegramShareButton url={webLink} title={compartilharMsg}>
          Telegram
        </TelegramShareButton>
      </RedesSociaisContainer>
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
