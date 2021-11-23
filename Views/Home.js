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
              <Text style={styles.text}>View My Races</Text>
            </Pressable>
          
          <Pressable
          title="My Profile"
          style={styles.button}
          onPress={() => navigation.navigate('ProfilePage')}>
            <Text style={styles.text}>My Profile</Text>
          </Pressable>
    {/*will need to add functional nagivation*/}
        <Pressable
        title="Create a Race"
        style={styles.button}
        onPress={() => navigation.navigate('CreateRace')}>
          <Text style={styles.text}>Create a Race</Text>
        </Pressable>

        {/*will need to add functional nagivation*/}
      <Pressable
      title="Settings"
      style={styles.button}
      backgroundColor= 'blue'
      onPress={() => navigation.navigate()}>
        <Text style={styles.text}>Settings</Text>
      </Pressable>
    
        </View>
    )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: 120,
    height: 120,
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