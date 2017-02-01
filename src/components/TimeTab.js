import React from 'react';
import { View, Text, TextInput } from 'react-native';

const TimeTab = ( { units, changeValue } ) => {

  return (
    <View>
      <Text>Time</Text>

      {units.map((u, i) => <TextInput key={i} keyboardType="numeric" value={u[1].toString()} onChangeText={(e) =>{changeValue(u[0], e)}} />)}
    </View>
  )
}

export default TimeTab;
