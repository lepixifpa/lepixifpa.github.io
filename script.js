const compartilharBtn = document.querySelector("[compartilhar-btn]");
const compartilharBg = document.querySelector("[compartilhar-bg]");
const copiarBtn = document.querySelector("[copiar-url]");
const fecharBtn = document.querySelector("[fechar-btn]");

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
    navigator.clipboard.writeText("https://lepixifpa.github.io/")
})
fecharBtn.addEventListener("click", alternarVisibilidadeCompartilhar)

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

function copiarUrl() {}