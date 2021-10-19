import React from 'react';
import { View } from 'react-native'
import LoginScreen from './Components/LoginScreen';
import MyRaces from './MyRaces'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <View>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'}} />
        <Stack.Screen name="MyRaces" component={MyRaces} options={{ title: 'My Races'}} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )};
