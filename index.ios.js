import React from 'react';
import {AppRegistry} from 'react-native';
import JiggyNativeAttempt from './src/containers/App';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <JiggyNativeAttempt />
  </Provider>
)

AppRegistry.registerComponent('JiggyNativeAttempt', () => App);
