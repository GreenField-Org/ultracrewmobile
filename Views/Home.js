import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Pressable } from 'react-native';


/*  This should be moved into the View folder once all page creations are merged back into main */
/* will need to add navigation to each button here */ 

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
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
      title="Create Aid"
      style={styles.button}
      backgroundColor= 'blue'
      onPress={() => navigation.navigate('AidStation')}>
        <Text>Create Aid</Text>
      </Pressable>
    
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: 100,
    height: 100,
    paddingHorizontal: 15,
    borderRadius: 60,
    elevation: 3,
    marginTop: 15,
    backgroundColor: '#0DF7DB',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8CD82',
    alignItems: 'center',
    justifyContent: 'center',
  },
})