import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './src/reducers'
import Home from './src/components/Home'

const store = createStore(reducers, devToolsEnhancer());

export default class ReactNativeConverter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}




AppRegistry.registerComponent('ReactNativeConverter', () => ReactNativeConverter);
