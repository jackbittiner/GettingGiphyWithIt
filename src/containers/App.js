import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchyBar from '../components/SearchBar';
import GifList from '../components/GifList';

export default class JiggyNativeAttempt extends Component {

  constructor() {
        super();

        this.state = {
            gifs: []
        };

        this.handleTermChange = this.handleTermChange.bind(this);
    }

  handleTermChange = (term) => {
    var url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=2cf60892033b43d4a1e577e721b99d41`;
    var value = []
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
     value = responseJson.data;
     this.setState({ gifs: value });
    })
    .catch((error) => {
      console.error(error);
    });
  };


  render() {
    return (
      <View style={styles.container}>
      <SearchyBar onTermChange={this.handleTermChange}/>
      <GifList gifs={this.state.gifs} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  gifurl: {
    width: 53,
    height: 81,
  },
});
