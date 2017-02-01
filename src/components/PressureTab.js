import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class PressureTab extends React.Component {
  render () {
    const { units, changeValue } = this.props;
    return (
      <View style={s.container}>
        {units.map((u, i) => (
          <View style={s.unit} key={i}>
            <Text>{u[0]}</Text>
            <TextInput
              ref={i}
              style={s.textInput}
              underlineColorAndroid={"#00BCD4"}
              keyboardType="numeric"
              value={u[1].toString()}
              onSubmitEditing={() => this.refs[i].blur()}
              onFocus={e => {
                changeValue(u[0], '');
              }}
              onChangeText={e => {
                changeValue(u[0], e);
              }}
            />
          </View>
        ))}
      </View>
    );
  }
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

export default PressureTab;
