import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DefaultButton from './Components/DefaultButton';
import { Button } from 'react-native';


/*  This should be moved into the View folder once all page creations are merged back into main */ 

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Main Menu</Text>
            <Button
            title="My Races"
            onPress={() => navigation.navigate('MyRaces')}
          />
          <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
        title="Race"
        onPress={() => navigation.navigate('Race')}
      />
      <Button
      title="Create Aid Station"
      onPress={() => navigation.navigate('AidStation')}
    />
        </View>
    )
}