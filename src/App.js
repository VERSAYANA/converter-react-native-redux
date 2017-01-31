import React, { Component } from 'react';
import UnitsContainer from './containers/UnitsContainer';
import TabsContainer from './containers/TabsContainer';
import { View } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <UnitsContainer />
        <TabsContainer />
      </View>
    );
  }
}
