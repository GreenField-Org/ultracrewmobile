import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent({itemList}){
  const [selectedValue, setSelectedValue] = useState("");
  // pass in itemList prop as a string separated by commas in order to create item dropdown
  return (
    <View style={styles.container}>
    <Picker>
      {itemList.split(',').map(label => <Picker.Item label={label} value={label} />)}
    </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
});
