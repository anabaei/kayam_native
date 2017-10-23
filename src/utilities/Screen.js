import React from 'react';
import ProgressiveInput from 'react-native-progressive-input';

const API = 'https://kayamspa.herokuapp.com/results/index';
var suggestions = [];
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      symptoms: '',
      isLoading: false
    };
  }

  componentDidMount() {
    // fetch(`${API}/symptoms/`).then(res => res.json()).then((json) => {
    fetch(`${API}`).then((res) => res.json()).then((res) =>
    ( suggestions = res, console.log(suggestions)));


  }

  _onChangeText(text) {
    this.setState({isLoading: true, value: text});
    console.log(this.state);
    this.setState({isLoading: false});

    const escapedValue = escapeRegexCharacters(text.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');

    return suggestions.filter(suggestion => regex.test(suggestion.name));
  }

  render() {
    return (
    <ProgressiveInput
      value={this.state.value}
      isLoading={this.state.isLoading}
      onChangeText={this._onChangeText.bind(this)}
    />
  );
  }
}

export default Screen;
