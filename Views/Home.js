import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Pressable } from 'react-native';


/*  This should be moved into the View folder once all page creations are merged back into main */
/* will need to add navigation to each button here */ 

export default function Home({ navigation }) {
    return (
        <View>
            <Pressable
              title="My Races"
              color= 'black'
              style={styles.button}
              onPress={() => navigation.navigate('MyRaces')}>
              <Text>My Races</Text>
            </Pressable>
          
          <Pressable
          title="My Profile"
          style={styles.button}
          onPress={() => navigation.navigate('ProfilePage')}>
            <Text>My Profile</Text>
          </Pressable>

        <Pressable
        title="My Races"
        style={styles.button}
        onPress={() => navigation.navigate('Race')}>
          <Text>My Races</Text>
        </Pressable>

      <Pressable
      title="Create Aid Station"
      style={styles.button}
      backgroundColor= 'blue'
      onPress={() => navigation.navigate('AidStation')}>
        <Text>Create Aid Station</Text>
      </Pressable>
    
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 120,
    paddingHorizontal: 10,
    borderRadius: 60,
    elevation: 3,
    backgroundColor: 'orange',
  }
})