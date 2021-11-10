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
            onPress={() => navigation.navigate('MyRaces')}
          />
          <Pressable
          title="My Profile"
          color= 'black'
          onPress={() => navigation.navigate('ProfilePage')}
        />
        <Pressable
        title="My Races"
        color= 'black'
        onPress={() => navigation.navigate('Race')}
      />
      <Pressable
      title="Create Aid Station"
      color= 'black'
      backgroundColor= 'blue'
      onPress={() => navigation.navigate('AidStation')}
    />
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
})