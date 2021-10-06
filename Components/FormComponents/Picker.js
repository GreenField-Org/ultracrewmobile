import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent(){
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
    <Picker
        //selectedValue={selectedLanguage}
        //onValueChange={(itemValue, itemIndex) =>
        //setSelectedLanguage(itemValue)
        >
        <Picker.Item label="Tier One" value="Tier One" />
        <Picker.Item label="Tier Two" value="Tier Two" />
        <Picker.Item label="Tier Three" value="Tier Three" />
        <Picker.Item label="Tier Four" value="Tier Four" />
    </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
