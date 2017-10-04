import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Symptoms from '../utilities/symptoms'


export default class Diagnose extends React.Component {
  render() {
    return (
      <View style={styles.container}>


        <Text> Something </Text>
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
