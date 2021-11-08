import React from "react";
import { Image } from 'react-native';
import styled from "styled-components/native";

/*
Criando os componentes de texto
*/
const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const Quadrado2 = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const Pagina = styled.View`
  flex: 1;
`;
function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="#55402a"></Quadrado>
        <Quadrado cor="#523c27">
          <Image source={require('./src/image/download.jpg')} 
          style={{width: 100, height: 100, backgroundColor: '#AAA'}} 
          resizeMode='cover'
          />
        </Quadrado>
        <Quadrado cor="#4e3924">
          <Image source={{uri:'https://www.google.com.br/google.jpg'}} 
            style={{width: 100, height: 100, backgroundColor: '#AAA'}} 
            resizeMode='center'
            />
        </Quadrado>
      </Header>
    </Pagina>


  );
}

export default App;