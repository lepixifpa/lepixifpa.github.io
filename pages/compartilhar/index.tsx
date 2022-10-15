import { useState } from "react";
import Image from "next/image";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { LinkContainer, RedesSociaisContainer } from "./_styles";

const Compartilhar = () => {
  const [textoCopiarURL, setTextoCopiarURL] = useState("Copiar");
  const webLink = "https://lepix.vercel.app";
  const compartilharMsg = "Conheça o LEPIX!";

  const copiarURL = () => {
    navigator.clipboard.writeText(webLink);
    setTextoCopiarURL("Copiado!");
    setTimeout(() => {
      setTextoCopiarURL("Copiar");
    }, 2000);
  };

  const SocialIcon = ({ icon }: any) => {
    return (
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: "64px", boxShadow: "none", width: 64, height: 64 }}
      />
    );
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
          <SocialIcon icon={faWhatsapp} />
        </WhatsappShareButton>

        <FacebookShareButton url={webLink} title={compartilharMsg}>
          <SocialIcon icon={faFacebook} />
        </FacebookShareButton>

        <TwitterShareButton url={webLink} title={compartilharMsg}>
          <SocialIcon icon={faTwitter} />
        </TwitterShareButton>

        <EmailShareButton url={webLink} title={compartilharMsg}>
          <SocialIcon icon={faEnvelope} />
        </EmailShareButton>

        <TelegramShareButton url={webLink} title={compartilharMsg}>
          <SocialIcon icon={faTelegram} />
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
