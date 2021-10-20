import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function PhoneNumber(){
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  //const phoneInput = useRef<PhoneInput>(null);
  return (
        <PhoneInput
            containerStyle={{
              backgroundColor: 'lightgray',
              width: "80%",
              shadowOffset: 10,
              borderRadius: 10
            }}
            css-view-1dbjc4 = {{
              paddingBottom: 19,
              paddingTop: 40,
              backgroundColor: 'blue'
          }}
            textInputStyle={{
              backgroundColor: 'lightgray',
              width: '80%',
              fontSize: 20,
            }}
            inputStyle={{
              backgroundColor: 'lightgray',
              width: "80%",
              borderRadius: 10
            }}
            defaultValue={value}
            defaultCode="IN"
            onChangeFormattedText={(text) => {
              setValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
  );
};

const styles = StyleSheet.create({
    phone: {
        width: 300,
    }
})