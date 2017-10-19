import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const API = 'https://kayamspa.herokuapp.com/results/index';


class Autosuggestion extends Component {

  static renderSymptom(symptom) {
    const { id } = symptom;
    return (
      <View>
        <Text style={styles.titleText}>{id}</Text>
      </View>
    );
  }


  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      query: ''
    };
  }

  componentDidMount() {
    // fetch(`${API}/symptoms/`).then(res => res.json()).then((json) => {
    fetch(`${API}`).then(res => res.json()).then((json) => {
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
          placeholder="Enter symptom name"
          renderItem= {({ name, id }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name })}>
              <Text style={styles.itemText}>
                {name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {symptoms.length > 0 ? (
            Autosuggestion.renderSymptom(symptoms[0])
          ) : (
            <Text style={styles.infoText}>
              id
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FdEF',
    flex: .06

  },
  autocompleteContainer: {
    marginLeft: 0,
    marginRight: 0

  },
  itemText: {
    fontSize: 15,
    margin: 8,
    opacity: 1
  },

  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 22
  },
  infoText: {
    textAlign: 'center'
  },
  nameText: {
    fontSize: 12,
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
