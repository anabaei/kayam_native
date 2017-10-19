import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const API = 'https://swapi.co/api';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

class Autosuggestion extends Component {


  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      query: ''
    };
  }

  componentDidMount() {
    // fetch(`${API}/symptoms/`).then(res => res.json()).then((json) => {
    fetch('https://kayamspa.herokuapp.com/results/index').then(res => res.json()).then((json) => {
      const symptoms = json;
      this.setState({ symptoms });
    });
  }

  findsymptom(query) {
    if (query === '') {
      return [];
    }

    const { symptoms } = this.state;
    const regex = new RegExp( "^" + query, "i");

    return symptoms.filter(symptom => regex.test(symptom.name) );
  }

  render() {

    const { query } = this.state;
    const symptoms = this.findsymptom(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={symptoms.length === 1 && comp(query, symptoms[0].name) ? [] : symptoms}
          defaultValue={query}
          onChangeText= {text => this.setState({ query: text })}
          placeholder="Enter Star Wars symptom name"
          renderItem= {({ name, release_date }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name })}>
              <Text style={styles.itemText}>
                {name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default Autosuggestion;
