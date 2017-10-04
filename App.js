import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Diagnose from './src/pages/Diagnose'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Learn More" onPress={()=> alert('I was passe!')} />
        <Diagnose />
        <Text> Some texts!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
