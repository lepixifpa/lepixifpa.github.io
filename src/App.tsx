import React from "react";
import { Descricao } from "./components/Descricao";
import { Redes } from "./components/Redes";
import { Participantes } from "./components/Participantes";
import { ConfigMenu } from "./components/ConfigMenu";

export const App = () => {
    // Variables
    const compartilharBtn = document.querySelector("#compartilhar-btn");
    const compartilharBg = document.querySelector("#compartilhar-bg");
    const copiarBtn = document.querySelector("#copiar-url");
    const fecharBtn = document.querySelector("#fechar-btn");

    // Event listeners

    compartilharBtn?.addEventListener("click", () => {
        alternarVisibilidadeCompartilhar();
        console.log("Botão compartilhar clicado");
    });
    compartilharBg?.addEventListener("click", (e) => {
        if (
            (e.target instanceof HTMLElement
                ? e.target.getAttribute("id")
                : "") === "compartilhar-bg"
        ) {
            alternarVisibilidadeCompartilhar();
            console.log("Background compartilhar clicado");
        }
    });
    copiarBtn?.addEventListener("click", () => {
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
    });
    fecharBtn?.addEventListener("click", () => {
        alternarVisibilidadeCompartilhar();
        console.log("Botão fechar clicado");
    });

    compartilharBtn?.removeEventListener("click", () => {
        alternarVisibilidadeCompartilhar();
        console.log("Botão compartilhar clicado");
    });
    compartilharBg?.removeEventListener("click", (e) => {
        if (
            (e.target instanceof HTMLElement
                ? e.target.getAttribute("id")
                : "") === "compartilhar-bg"
        ) {
            alternarVisibilidadeCompartilhar();
            console.log("Background compartilhar clicado");
        }
    });
    copiarBtn?.removeEventListener("click", () => {
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
    });
    fecharBtn?.removeEventListener("click", () => {
        alternarVisibilidadeCompartilhar();
        console.log("Botão fechar clicado");
    });
    
    // Functions
    function alternarVisibilidadeCompartilhar() {
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
    }
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
