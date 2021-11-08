import React from "react";
import styled from "styled-components/native";

/*
Criando os componentes de texto
*/
const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  height: 200px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;
const Quadrado2 = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 100px;
`;
const Pagina = styled.View`
  flex: 1;
`;
function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="#55402a"></Quadrado>
        <Quadrado2 cor="#523c27"></Quadrado2>
        <Quadrado cor="#4e3924"></Quadrado>
        <Quadrado2 cor="#4b3621"></Quadrado2>
        <Quadrado cor="#48331e"></Quadrado>
        <Quadrado2 cor="#44301b"></Quadrado2>
        <Quadrado cor="#412d18"></Quadrado>
        <Quadrado2 cor="#47382a"></Quadrado2>
        <Quadrado cor="#413933"></Quadrado>
        <Quadrado2 cor="#3b3b3b"></Quadrado2>
        <Quadrado cor="#333d44"></Quadrado>
        <Quadrado2 cor="#283e4d"></Quadrado2>
        <Quadrado cor="#55402a"></Quadrado>
        <Quadrado2 cor="#523c27"></Quadrado2>
        <Quadrado cor="#4e3924"></Quadrado>
        <Quadrado2 cor="#4b3621"></Quadrado2>
        <Quadrado cor="#48331e"></Quadrado>
        <Quadrado2 cor="#44301b"></Quadrado2>
        <Quadrado cor="#412d18"></Quadrado>
        <Quadrado2 cor="#47382a"></Quadrado2>
        <Quadrado cor="#413933"></Quadrado>
        <Quadrado2 cor="#3b3b3b"></Quadrado2>
        <Quadrado cor="#333d44"></Quadrado>
        <Quadrado2 cor="#283e4d"></Quadrado2>
      </Header>
    </Pagina>


  );
}

export default App;