import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const customFont = {
  'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf')
}

export default function LoginScreen() {
  //it's binnnaa while since I've used state. But I think this is right
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let [fontsLoaded] = useFonts(customFont)
  
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Ultra Crew App</Text>
        <View style={styles.inputView}>
        
          <TextInput
            style={styles.TextInput}
            placeholder="email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setUsername(username)}
          />
        </View>
 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="password"
            placeholderTextColor="#003f5c"
            //should we add option to show pw when you're done typing it?
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.createAcct}
            //add onpress.. use react dom to link to new page?
          >Create an account</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    marginBottom: 50,
    fontFamily: 'Lobster-Regular'
  },
  inputView: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    fontSize: 20,
    padding: 5,
    marginLeft: 20,
  },

  createAcct: {
    marginTop: 40
  },

  loginButton:
 {
   width:"80%",
   borderRadius:10,
   height:50,
   fontSize: 20,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"orange",
 }

});
