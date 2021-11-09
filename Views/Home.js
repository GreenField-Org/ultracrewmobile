import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native';


/*  This should be moved into the View folder once all page creations are merged back into main */
/* will need to add navigation to each button here */ 

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Main Menu</Text>
            <Button
            title="My Races"
            onPress={() => navigation.navigate('MyRaces')}
          />
          <Button
          title="My Profile"
          onPress={() => navigation.navigate('ProfilePage')}
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