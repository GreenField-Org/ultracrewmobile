import React from 'react';
import { View } from 'react-native'
import PhoneNumber from './Components/FormComponents/PhoneNumber';
import LoginScreen from './Components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return(
    <View>
    <NavigationContainer>
      <LoginScreen/>
      <PhoneNumber/>
    </NavigationContainer>
    </View>
  )};
