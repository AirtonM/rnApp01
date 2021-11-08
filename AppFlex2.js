import React from "react";
import styled from "styled-components/native";

/*
Criando os componentes de texto
*/
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;
const Pagina = styled.View`
  flex: 1;
  flex-direction: column;
  /*justify-content: space-between;*/
  justify-content: center;
  align-items: flex-end;
`;

function App() {
  return (
    <Pagina>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="#ffff00"></Quadrado>
    </Pagina>
  );
}

export default App;