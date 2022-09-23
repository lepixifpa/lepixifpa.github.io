import fotoAilton from "../assets/ailton.jpg"
import fotoGilberto from "../assets/gilberto.jpg"
import fotoJosue from "../assets/josue.jpg"
import fotoKeilane from "../assets/keilane.jpeg"

export const Participantes = () => {
  return (
    <div id="participantes">
      <h2>Participantes</h2>
      <div>
        <a href="https://github.com/vitorkoch" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/105176076?v=4"
            width="120px"
            id="foto-vitor"
            alt=""
          />
          <label htmlFor="foto-vitor">
            Vitor
            <br />
            Koch
          </label>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Sukira-Mandela"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/95509194?v=4"
            width="120px"
            id="foto-maria"
            alt=""
          />
          <label htmlFor="foto-maria">
            Maria
            <br />
            Eduarda
          </label>
        </a>
      </div>

      <div>
        <a href="https://github.com/MaamMark" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/96156555?v=4"
            width="120px"
            id="foto-marcos"
            alt=""
          />
          <label htmlFor="foto-marcos">
            Marcos
            <br />
            Henrique
          </label>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/RebecaRDonato"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/85712784?v=4"
            width="120px"
            id="foto-rebeca"
            alt=""
          />
          <label htmlFor="foto-rebeca">
            Rebeca
            <br />
            Rodrigues
          </label>
        </a>
      </div>

      <div>
        <a href="https://github.com/Abytsu" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/42917989?v=4"
            width="120px"
            id="foto-michel"
            alt=""
          />
          <label htmlFor="foto-michael">
            Michel
            <br />
            Arthur
          </label>
        </a>
      </div>

      <div>
        <a href="https://github.com/Satur696" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/82034427?v=4"
            width="120px"
            id="foto-gustavo"
            alt=""
          />
          <label htmlFor="foto-gustavo">
            Gustavo
            <br />
            Paulo
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            id="foto-jamily"
            width="120px"
            height="120px"
          />
          <label htmlFor="foto-jamily">
            Jamily
            <br />
            Trindade
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src={fotoKeilane}
            alt=""
            id="foto-keilane"
            width="120px"
            height="120px"
          />
          <label htmlFor="foto-keilane">
            Keilane
            <br />
            Alves
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/299448859_2887710688196799_4512110347379281617_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwJgrCGJ-mkWarvfyVgWTOrQfdVc602EJB_ElaSkmq4bw&oe=633D9813"
            alt=""
            id="foto-thiago"
            width="120px"
            height="120px"
          />
          <label htmlFor="foto-thiago">
            Thiago
            <br />
            Soares
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/301452785_2703960976407035_5732664683102534114_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyfbVOPFInlpEF2G4fFs8swpp3mB7JQyFyhOfDjmcIl9A&oe=633D2024"
            alt=""
            id="foto-sabrina"
            width="120px"
            height="120px"
          />
          <label htmlFor="foto-sabrina">
            Sabrina
            <br />
            Silva
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src={fotoJosue}
            alt=""
            id="foto-josue"
            width="120px"
            height="120px"
          />
          <label htmlFor="foto-josue">
            Josué
            <br />
            Armando
          </label>
        </a>
      </div>

      <h2>Coordenadores</h2>
      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src={fotoGilberto}
            width="120px"
            height="120px"
            id="foto-gilberto"
            alt=""
          />
          <label htmlFor="foto-gilberto">
            Gilberto
            <br />
            Melo
          </label>
        </a>
      </div>

      <div>
        <a href="https://lepixifpa.github.io/" target="_blank" rel="noreferrer">
          <img
            src={fotoAilton}
            id="foto-ailton"
            width="120px"
            height="120px"
            alt=""
          />
          <label htmlFor="foto-ailton">
            Ailton
            <br />
            Lopes
          </label>
        </a>
      </div>
    </div>
  );
};
