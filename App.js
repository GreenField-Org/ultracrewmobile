import React from 'react';
import { View, StyleSheet } from 'react-native'
import LoginScreen from './Views/LoginScreen';


export default function App() {
  return(
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  )};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F8CD82'
    }
    })
