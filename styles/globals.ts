import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
  font-family: JetBrains Mono, Poppins, sans-serif;
  font-weight: 500;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-align: center;
}

body {
  background: url(/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  height: 100%;
  width: 100%;
}

#redes {
  margin: 12px auto 12px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 90%;
}

#redes div {

  align-self: center;
  margin-left: 8px;
  margin-top: 8px;
  text-align: center;
}

#redes button {
  text-align: center;
  align-self: center;
  width: 100%;
  font-size: 24px;
}

@media screen and (max-width: 650px) {
  #redes {
    flex-direction: column !important;
  }
  #redes div {
    width: 100%;
  }
  #navbarLogo {
    display: none;
  }
}
button {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 4px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-size: 16px;
  transition: 250ms;
  cursor: pointer;
}

button:hover {
  background-color: rgba(255, 255, 255, 1);
  border: 3px solid white;
}

#container-descricao {
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
  word-break: break-all;
}

#descricao {
  width: 70%;
  font-size: 28px;
}

#descricao p {
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  word-wrap: break-word;
  word-break: break-all;
  padding: 8px;
  border-radius: 12px;
  transition: all 250ms;
}

#participantes {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  padding: 12px;
  font-size: 20px;
  width: 100%;
  margin: auto;
}

#participantes h2 {
  margin: 8px;
}

#participantes div {
  width: 120px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  bottom: 0;
  transition: 250ms;
}

#participantes div:hover {
  bottom: 20px;
}

#participantes a {
  color: black;
  text-decoration: none;
}

nav,
button,
#participantes,
#descricao p {
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);
}

.hide {
  display: none;
}
`;
export default GlobalStyle;
