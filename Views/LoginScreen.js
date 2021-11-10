import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import DefaultButton from '../Components/DefaultButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const customFont = {
  'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf')
}

export default function LoginScreen({navigation}) {
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

        <DefaultButton buttonText='Login'/>

        <Button title="Create an Account" style={styles.createAcctBtn} onPress={() => navigation.navigate('CreateAcct')}/>
     </View>
  )}
  else{
    return(
      <View/>
    )
  }
}

const styles = StyleSheet.create({
  createAcctBtn:{
    width: 130
  },
  container: {
    backgroundColor: '#F8CD82',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
   backgroundColor:"#0DF7DB",
 }

});
