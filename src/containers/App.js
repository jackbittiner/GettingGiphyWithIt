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
            gifs: [
                {
                    id: 1,
                    url: 'https://media.giphy.com/media/WuGSL4LFUMQU/giphy.gif'
                },
                {
                    id: 2,
                    url: 'https://media.giphy.com/media/l4Ki2UBDUhRjvmC7m/giphy.gif'
                },
                {
                    id: 3,
                    url: 'https://media.giphy.com/media/ului10cR0BK8w/giphy.gif'
                }
            ]
        }
    }

  handleTermChange(term) {
    console.log(term);
  }

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
