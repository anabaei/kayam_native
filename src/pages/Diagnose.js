import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Symptoms, Amirr} from '../utilities/symptoms'

var languages = [];

const ss = {
  getAll() {
    return fetch('https://kayamspa.herokuapp.com/results/index').then(res => res.json())

  }
}

export default class Diagnose extends React.Component {



  constructor (props) {
   super(props);

   this.state = {
     questions: []
   };
 }
  componentDidMount () {
    console.log(ss.getAll());


  }

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
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
