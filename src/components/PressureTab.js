import React from 'react';
import { View, Text, TextInput } from 'react-native';

const PressureTab = ( { units, changeValue } ) => {

  return (
    <View>
      <Text>Pressure</Text>
      {units.map((u, i) => <TextInput key={i} keyboardType="numeric" value={u[1].toString()} onChangeText={(e) =>{changeValue(u[0], e)}} />)}
    </View>
  )
}

export default PressureTab;
