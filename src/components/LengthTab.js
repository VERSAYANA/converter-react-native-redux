import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const LengthTab = ({ units, changeValue }) => {
  return (

    <View style={s.container}>
      {units.map((u, i) => (
        <View style={s.unit} key={i}>
          <Text>{u[0]}</Text>
          <TextInput
            style={s.textInput}
            underlineColorAndroid={"#00BCD4"}
            keyboardType="numeric"
            value={u[1].toString()}
            onChangeText={e => {
              changeValue(u[0], e);
            }}
          />
        </View>
      ))}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
  },
  unit: {
    marginBottom: 5,
  },
  textInput: {
    height: 40,
  },
})

export default LengthTab;
