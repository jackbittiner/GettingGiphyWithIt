import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchyBar from '../components/SearchBar';

var MOCKED_GIF_DATA = [
  {gifurl: "https://media.giphy.com/media/WuGSL4LFUMQU/giphy.gif"},
  {gifurl: "https://media.giphy.com/media/l4Ki2UBDUhRjvmC7m/giphy.gif"},
  {gifurl: "https://media.giphy.com/media/ului10cR0BK8w/giphy.gif"}
];

export default class JiggyNativeAttempt extends Component {

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    var gif = MOCKED_GIF_DATA[0];
    return (
      <View style={styles.container}>
      <SearchyBar onTermChange={this.handleTermChange}/>
        <Image
        source={{uri: gif.gifurl}}
        style={styles.gifurl} />
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
