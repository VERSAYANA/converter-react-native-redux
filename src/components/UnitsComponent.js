import React from 'react';
import { View, TextInput, underlineColorAndroid } from 'react-native';

const UnitsComponent = ( {units, name, changeValue} ) => {

  return(
    <View style={{flex: 1}}>
      {units.map((u, i) => <TextInput underlineColorAndroid={'gray'} key={i} keyboardType="numeric" value={u[1].toString()} onChangeText={(e) =>{changeValue(name, u[0], e)}} />)}
    </View>
  );
};

export default UnitsComponent;
