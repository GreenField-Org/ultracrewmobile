import React from 'react';
import { View } from 'react-native'
import PhoneNumber from './Components/FormComponents/PhoneNumber';
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return(
    <View>
      <LoginScreen/>
      <PhoneNumber/>
    </View>
  )};
