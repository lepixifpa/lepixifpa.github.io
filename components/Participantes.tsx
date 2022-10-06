import { Participante } from "./Participante";

export const Participantes = () => {
  return (
    <div id="participantes">
      <h2>Participantes</h2>
      <Participante
        nome="Vitor"
        sobrenome="Koch"
        foto={require("../assets/vitor.jpg")}
        link="https://github.com/vitorkoch"
      />
      <Participante
        nome="Maria"
        sobrenome="Eduarda"
        foto={require("../assets/maria.jpeg")}
        link="https://github.com/Sukira-Mandela"
      />
      <Participante
        nome="Marcos"
        sobrenome="Henrique"
        foto={require("../assets/marcos.png")}
        link="https://github.com/MaamMark"
      />
      <Participante
        nome="Rebeca"
        sobrenome="Donato"
        foto={require("../assets/rebeca.jpeg")}
        link="https://github.com/RebecaRDonato"
      />
      <Participante
        nome="Michel"
        sobrenome="Arthur"
        foto={require("../assets/michel.jpeg")}
        link="https://github.com/Abytsu"
      />
      <Participante
        nome="Gustavo"
        sobrenome="Paulo"
        foto={require("../assets/gustavo.jpeg")}
        link="https://github.com/Satur696"
      />
      <Participante
        nome="Jamily"
        sobrenome="Trindade"
        foto={require("../assets/jamily-recortado.jpeg")}
      />
      <Participante nome="Keilane" sobrenome="Alves" foto={require("../assets/keilane.jpg")} />
      <Participante
        nome="Thiago"
        sobrenome="Soares"
        foto={require("../assets/thiago.jpg")}
      />
      <Participante
        nome="Sabrina"
        sobrenome="Silva"
        foto={require("../assets/sabrina.jpg")}
      />
      <Participante nome="Josué" sobrenome="Armando" foto={require("../assets/josue.jpg")} />

      <h2>Coordenadores</h2>
      <Participante nome="Gilberto" sobrenome="Melo" foto={require("../assets/gilberto.jpg")} />
      <Participante nome="Ailton" sobrenome="Lopes" foto={require("../assets/ailton.jpeg")} />
    </div>
  );
};
