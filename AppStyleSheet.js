import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={estilo.pagina} >
      <Text style={estilo.texto} >
        Açai do Bejamin Arola.
      </Text>
      <Text style={estilo.texto} >
        Concertos Cuca Beludo..
      </Text>
      <Text style={[estilo.texto, {fontSize:13}]} >
        Farmacia Davi Agra...
      </Text>
    </View>
  );
}

/*
Criando a constante estilo que vai 
receber um objeto StyleSheet
*/
const estilo = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor: '#4b3621',
    margin: 20,
    padding: 10,
  },
  texto: {
    color:'#fff',
    fontSize: 15, 
    fontWeight:'bold', 
    marginBottom: 5
  }


});

export default App;