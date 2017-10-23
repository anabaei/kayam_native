import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Diagnose from './src/pages/Diagnose'

import { Dropdown } from 'react-native-material-dropdown';
import Screen from './src/utilities/Screen'


export default class App extends React.Component {
  render() {

    let data = [{
      value: 'Male',
    }, {
      value: 'Female',
    }];

    return (
      <View style={styles.container}>
        <Dropdown
        label='Gender'
        data={data}
      />
        <Button title="Learn More" onPress={()=> alert('I was passe!')} />
        <Diagnose />
        <Screen />
        <Text> yt </Text>



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
