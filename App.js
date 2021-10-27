import React from 'react';
import { View } from 'react-native'
import LoginScreen from './Components/LoginScreen';
import PickerComponent from './Components/FormComponents/Picker';

export default function App() {
  return(
    <View>
      <PickerComponent itemList= '[mazzy, lilka, toska]'/>
    </View>
  )};

