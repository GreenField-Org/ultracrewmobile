import React from 'react';
import { View, Button } from 'react-native'
import LoginScreen from './Views/LoginScreen';
import MyRaces from './Views/MyRaces'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenStack } from 'react-native-screens';
import Home from './Views/Home'
import CreateAcct from './Views/CreateAcct';
import ActiveRaces from './Views/ActiveRaces';
import ProfilePage from './Views/ProfilePage';
import AidStation from './Views/Aid-Station';
import CompletedRaces from './Views/CompletedRaces'; 
import CreateRace from './Views/CreateRace';
import CreateAid from './Views/CreateAid';
import CompletedRaceStats from './Views/CompletedRaceStats';
import { RootSiblingParent } from 'react-native-root-siblings';
import ActiveRaceStats from './Views/ActiveRaceStats';
import AidStationStats from './Views/AidStationStats';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return(
    <RootSiblingParent>
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "lightgray",
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          {/*<Tab.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Tab.Screen name="Races" component={ActiveRaces} options={{headerShown: false}} />
          <Tab.Screen name="Profile" component={ProfilePage} options={{headerShown: false}} /> */}
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="MyRaces" component={MyRaces} options={{ title: 'My Races', headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false}} />
          <Stack.Screen name="CreateAcct" component={CreateAcct} options={{ title: 'Create Account'}} />
          <Stack.Screen name="CreateAid" component={CreateAid} options={{ title: 'Create Aid Station'}} />
          <Stack.Screen name="ActiveRaces" component={ActiveRaces} options={{ title: 'Active Races'}} />
          <Stack.Screen name="CreateRace" component={CreateRace} options={{ title: 'Create Race'}} />
          <Stack.Screen name="CompletedRaces" component={CompletedRaces} options={{ title: 'Completed Races'}} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'My Profile'}} />
          <Stack.Screen name="AidStation" component={AidStation} options={{ title: 'Aid Station'}} />
          <Stack.Screen name="CompletedRaceStats" component={CompletedRaceStats} options={{ title: 'Completed Race Stats'}} />
          <Stack.Screen name="AidStationStats" component={AidStationStats} options={{ title: 'Aid Station Stats'}} />
      <Stack.Screen name="ActiveRaceStats" component={ActiveRaceStats} options={{ title: 'Active Race Stats'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  )
};
