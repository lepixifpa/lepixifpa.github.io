export const ConfigMenu = () => {

    return (
        <div id="compartilhar-bg">
            <div id="compartilhar-container">
                <button type="button" id="fechar-btn">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Link</h3>
                https://lepixifpa.github.io/
                <br />
                <button type="button" id="copiar-url">
                    Copiar
                </button>
                <h3>QR Code</h3>
                <img
                    src="https://raw.githubusercontent.com/lepixifpa/lepixifpa.github.io/main/qrcode.png"
                    alt="QR Code"
                    width="50%"
                />
                <br />
            </div>
        </div>
    );
};
