import { Participante } from "./Participante";
import fotoVitor from "../assets/vitor.jpg"
import fotoSabrina from "../assets/sabrina.jpg"
import fotoJosue from "../assets/josue.jpg"
import fotoKeilane from "../assets/keilane.jpg"
import fotoGilberto from "../assets/gilberto.jpg"
import fotoAilton from "../assets/ailton.jpg"
import fotoThiago from "../assets/thiago.jpg"

export const Participantes = () => {
  return (
    <div id="participantes">
      <h2>Participantes</h2>
      <Participante
        nome="Vitor"
        sobrenome="Koch"
        foto={fotoVitor}
        link="https://github.com/vitorkoch"
      />
      <Participante
        nome="Maria"
        sobrenome="Eduarda"
        foto="https://avatars.githubusercontent.com/u/95509194?v=4"
        link="https://github.com/Sukira-Mandela"
      />
      <Participante
        nome="Marcos"
        sobrenome="Henrique"
        foto="https://avatars.githubusercontent.com/u/96156555?v=4"
        link="https://github.com/MaamMark"
      />
      <Participante
        nome="Rebeca"
        sobrenome="Donato"
        foto="https://avatars.githubusercontent.com/u/85712784?v=4"
        link="https://github.com/RebecaRDonato"
      />
      <Participante
        nome="Michel"
        sobrenome="Arthur"
        foto="https://avatars.githubusercontent.com/u/42917989?v=4"
        link="https://github.com/Abytsu"
      />
      <Participante
        nome="Gustavo"
        sobrenome="Paulo"
        foto="https://avatars.githubusercontent.com/u/82034427?v=4"
        link="https://github.com/Satur696"
      />
      <Participante
        nome="Jamily"
        sobrenome="Trindade"
      />
      <Participante nome="Keilane" sobrenome="Alves" foto={fotoKeilane} />
      <Participante
        nome="Thiago"
        sobrenome="Soares"
        foto={fotoThiago}
      />
      <Participante
        nome="Sabrina"
        sobrenome="Silva"
        foto={fotoSabrina}
      />
      <Participante nome="Josué" sobrenome="Armando" foto={fotoJosue} />

      <h2>Coordenadores</h2>
      <Participante nome="Gilberto" sobrenome="Melo" foto={fotoGilberto} />
      <Participante nome="Ailton" sobrenome="Lopes" foto={fotoAilton} />
    </div>
  );
};
