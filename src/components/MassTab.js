import React from 'react';
import { View, Text, TextInput } from 'react-native';

const MassTab = ( { units, changeValue } ) => {

  return (
    <View>
      <Text>Mass</Text>
      {units.map((u, i) => <TextInput underlineColorAndroid={'gray'} key={i} keyboardType="numeric" value={u[1].toString()} onChangeText={(e) =>{changeValue(u[0], e)}} />)}
    </View>
  )
}

export default MassTab;
