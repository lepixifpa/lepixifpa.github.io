// Variables
const compartilharBtn = document.querySelector("[compartilhar-btn]");
const compartilharBg = document.querySelector("[compartilhar-bg]");
const copiarBtn = document.querySelector("[copiar-url]");
const fecharBtn = document.querySelector("[fechar-btn]");

// Event listeners
compartilharBtn.addEventListener("click", alternarVisibilidadeCompartilhar);
compartilharBg.addEventListener("click", (e) => {
    if (
        (e.target instanceof HTMLElement ? e.target.getAttribute("id") : "") ===
        "compartilhar-bg"
    ) {
        alternarVisibilidadeCompartilhar();
    }
});
copiarBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("https://lepixifpa.github.io/");
    copiarBtn instanceof HTMLElement ? (copiarBtn.innerText = "Copiado!") : "";
    setTimeout(() => {
        copiarBtn instanceof HTMLElement
            ? (copiarBtn.innerText = "Copiar")
            : "";
    }, 2000);
});
fecharBtn.addEventListener("click", alternarVisibilidadeCompartilhar);

// Functions
function alternarVisibilidadeCompartilhar() {
    const statusBg = window.getComputedStyle(compartilharBg).display;
    switch (statusBg) {
        case "none":
            compartilharBg.style.display = "block";
            break;
        case "block":
            compartilharBg.style.display = "none";
            break;
    }
}

// A little easter egg
function minecraft() {
    const body = document.querySelector("body");
    const buttons = document.querySelectorAll("button");
    const anchors = document.querySelectorAll("a");
    const pointerCursors = [buttons, anchors];

    body.style.cursor =
        "url(http://www.rw-designer.com/cursor-view/24907.png), auto";

    pointerCursors.forEach((element) => {
        element.forEach((element) => {
            element.style.cursor =
                "url(http://www.rw-designer.com/cursor-view/24908.png), auto";
        });
    });
}
