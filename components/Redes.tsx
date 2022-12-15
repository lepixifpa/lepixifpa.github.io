import { Rede } from './Rede';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Redes = () => {
  return (
    <div id="redes">
      <Rede
        texto="Github"
        icon={
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: 32, height: 32, width: 32 }}
          ></FontAwesomeIcon>
        }
        link="https://github.com/lepixifpa"
      />
      <Rede
        texto="Instagram"
        icon={
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: 32, height: 32, width: 32 }}
          ></FontAwesomeIcon>
        }
        link="https://www.instagram.com/lepix.ifpa/"
      />
      <Rede
        texto="E-mail"
        icon={
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: 32, height: 32, width: 32 }}
          ></FontAwesomeIcon>
        }
        link="mailto: ifpalepix@gmail.com"
      />
    </div>
  );
};
