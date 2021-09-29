import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Login from './components/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
