import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import DefaultButton from '../Components/DefaultButton';

export default function LoginScreen() {
  //it's binnnaa while since I've used state. But I think this is right
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf')
  })
  
  return (
    <View style={styles.container}>
    <Text style={styles.titleText}> Ultra Crew App</Text>
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

<DefaultButton buttonText='Login'/>

<TouchableOpacity style={styles.loginButton}>
<Text>Create an Account</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  createAcctBtn:{
    width: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#F8CD82',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },

  titleText: {
    fontSize: 40,
    marginBottom: 40,
    fontFamily: 'Lobster-Regular'
  },

  image :{
    marginBottom: 40,
    height: 100, 
    width: 200,
    borderRadius: 10
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
   backgroundColor:"#0DF7DB",
 }

});
