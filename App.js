import React from 'react';
import { View, Button } from 'react-native'
import LoginScreen from './Components/LoginScreen';
import MyRaces from './MyRaces'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';
import Home from './Home';
import CreateAcct from './Components/CreateAcct';
import Race from './Race';
import ProfilePage from './Components/ProfilePage';
import AidStation from './Views/Aid-Station';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return(
    <View>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'}} />
        <Stack.Screen name="MyRaces" component={MyRaces} options={{ title: 'My Races'}} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}} />
        <Stack.Screen name="CreateAcct" component={CreateAcct} options={{ title: 'Create Account'}} />
        <Stack.Screen name="Race" component={Race} options={{ title: 'Race'}} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'My Profile'}} />
        <Stack.Screen name="AidStation" component={AidStation} options={{ title: 'Aid Station'}} />

      </Stack.Navigator>
    </NavigationContainer>


    </View>
  )};
