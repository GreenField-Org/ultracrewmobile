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
            //ref={phoneInput}
            style={styles.phone}
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
        height: 100,
        justifyContent: 'center',
    }
})