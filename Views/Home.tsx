import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Pressable } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello, !</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('MyRaces')}>
            <Text style={styles.text}>View My Races</Text>
          </Pressable>
          <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ProfilePage')}>
            <Text style={styles.text}>My Profile</Text>
          </Pressable>
          {/*will need to add functional nagivation*/}
          <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CreateRace')}>
            <Text style={styles.text}>Create a Race</Text>
          </Pressable>

          {/*will need to add functional nagivation*/}
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate()}>
              <Text style={styles.text}>Settings</Text>
          </Pressable>
          <Pressable
            style={styles.button}
          >
            <Text style={styles.text}>Logout</Text>
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
    width: "80%",
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
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