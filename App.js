import React from 'react';
import { View } from 'react-native'
import PhoneNumber from './Components/FormComponents/PhoneNumber';
import LoginScreen from './Components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import CreateAcct from './Components/CreateAcct';
export default function App() {
  return(
    <View>
    <NavigationContainer>
    <CreateAcct/>
      <LoginScreen/>
      <PhoneNumber/>
    </NavigationContainer>
    </View>
  )};
