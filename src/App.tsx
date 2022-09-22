import React from "react";
import { Descricao } from "./components/Descricao";
import { Redes } from "./components/Redes";
import { Participantes } from "./components/Participantes";
import { ConfigMenu } from "./components/ConfigMenu";

export const App = () => {
  // Variables

  // Event listeners

  // Functions

  return (
    <>
      <Descricao />
      <Redes />
      <Participantes />
      <ConfigMenu />
      <footer>&copy; Vitor Koch 2022</footer>
    </>
  );
};

export const alternarVisibilidadeCompartilhar = () => {
  const compartilharBg = document.querySelector("#compartilhar-bg");
  const statusBg =
    compartilharBg instanceof HTMLElement
      ? window.getComputedStyle(compartilharBg).display
      : "";
  console.log({ statusBg });
  switch (statusBg) {
    case "none":
      compartilharBg instanceof HTMLElement
        ? (compartilharBg.style.display = "block")
        : console.error();
      break;
    case "block":
      compartilharBg instanceof HTMLElement
        ? (compartilharBg.style.display = "none")
        : console.error();
      break;
  }
};
