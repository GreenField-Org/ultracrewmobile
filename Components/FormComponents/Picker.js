import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent({defaultVal}){
  const [selectedTier, setSelectedValue] = useState("");
  const labelList = []
  /*will need to add map in order to create new drop down for each val*/
  return (
    <View style={styles.container}>
    <Picker>
        <Picker.Item label={defaultVal} value={defaultVal} />
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
