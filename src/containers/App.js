import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchyBar from '../components/SearchBar';
import GifList from '../components/GifList';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

class JiggyNativeAttempt extends Component {
  render() {
     return (
       <View style={styles.container}>
         <SearchyBar onTermChange={this.props.actions.requestGifs}/>
         <GifList gifs={ this.props.gifs } />
       </View>
     );
   }
 }

 function mapStateToProps(state) {
   return {
     gifs: state.gifs.data
   };
 }

 function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
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

 export default connect(mapStateToProps, mapDispatchToProps)(JiggyNativeAttempt);
