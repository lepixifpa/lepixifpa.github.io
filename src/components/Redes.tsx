import { alternarVisibilidadeCompartilhar } from "../App";

export const Redes = () => {
  return (
    <div id="redes">
      <div>
        <a href="https://github.com/lepixifpa">
          <button type="button">
            <i className="fa-brands fa-github"></i>
            <br />
            Github
          </button>
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/lepix.ifpa/">
          <button type="button">
            <i className="fa-brands fa-instagram"></i>
            <br />
            Instagram
          </button>
        </a>
      </div>

      <div>
        <a href="mailto: ifpalepix@gmail.com">
          <button type="button">
            <i className="fa-solid fa-envelope"></i>
            <br />
            Email
          </button>
        </a>
      </div>

      <div className="">
        <button id="compartilhar-btn" type="button" onClick={alternarVisibilidadeCompartilhar}>
          <i className="fa-solid fa-share"></i>
          <br />
          Compartilhar
        </button>
      </div>
    </div>
  );
};
