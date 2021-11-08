import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

/*
Criando os componentes de texto
*/
const Texto = styled.Text`
  color: #FFF;
  font-size: 30px;
  font-weight: 600;
`;
const Pagina = styled.View`
  background: #4b3621;
  margin: 20px 10px;
  padding: 10px 5px;
`;

function App() {
  return (
    <Pagina>
      <Texto> Estética Alan Bida. </Texto>
      <Texto> Mercadinho Tia Romba.. </Texto>
    </Pagina>
  );
}

export default App;
