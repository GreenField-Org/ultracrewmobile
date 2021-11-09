import React from 'react';
import { View, Button } from 'react-native'
import LoginScreen from './Views/LoginScreen';
import MyRaces from './Views/MyRaces'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';
import Home from './Views/Home'
import CreateAcct from './Views/CreateAcct';
import Race from './Views/Race';
import ProfilePage from './Views/ProfilePage';
import AidStation from './Views/Aid-Station';

const Stack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MyRaces" component={MyRaces} options={{ title: 'My Races'}} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}} />
        <Stack.Screen name="CreateAcct" component={CreateAcct} options={{ title: 'Create Account'}} />
        <Stack.Screen name="Race" component={Race} options={{ title: 'Race'}} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'My Profile'}} />
        <Stack.Screen name="AidStation" component={AidStation} options={{ title: 'Aid Station'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
