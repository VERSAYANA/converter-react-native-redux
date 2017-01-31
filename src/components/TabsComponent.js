import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabComponents = ({ tabs, active })  => {


  console.log(tabs);
  return (
    <View style={styles().tabscontainer}>
      {tabs.map((t, i) =>
        <TouchableOpacity style={styles().tab} key={i} onPress={() => active(t.name)}>

            <Text style={styles(t.active).text}>{t.name}</Text>

        </TouchableOpacity>)
      }
    </View>
  )
};


const styles = (active) => {
  let style = StyleSheet.create({
    tabscontainer: {
      flexDirection: 'row',
      height: 50,
    },
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    text: {
      color: 'gray'
    }
  });
  if (active) {
    style = {
      ...style,
      text: {color: 'black'}
    };
  }
  return style;
};


export default TabComponents;
