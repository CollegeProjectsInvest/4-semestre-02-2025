import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

// Componente
function BotaoTeste(props) {
  return <Button title={props.title} />
}

function LetraMaiuscula({ color, children }) {
  return (
    <Text style={{ color: color }}>
      {children}
    </Text>
  )
}

export default function App() {
  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      {/* <Text>Hello World!</Text> */}
      {/* <BotaoTeste title="Titulo 1" />
      <BotaoTeste title="Titulo 2" />
      <LetraMaiuscula color="red">Olá</LetraMaiuscula>
      <LetraMaiuscula color="blue">Olá Mundo</LetraMaiuscula> */}
      <Text style={styles.textoContador}>{contador}</Text>
      <Button title='Adicionar +1' onPress={() => {
        setContador(contador + 1)
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414'
  },
  textoContador: {
    color: 'red',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '2rem'
  }
})