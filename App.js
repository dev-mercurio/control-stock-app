import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import icon from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 100, height: 100}} />
      <StatusBar style="auto" />
      <Text>Hello world!</Text>
      <Button title="Pulsa aquí" onPress={() => alert('Hola!')}/>
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert('Chau!')}
        style={{ width: 200, height: 200}}
      >
        <Text>También puedes pulsar aquí</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
