import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={}
        placeholder="Username" 
      />
      <TextInput 
         onChangeText={}
         placeholder="password" 
         secureTextEntry={true}
      />
      <Button 
        onPress={} 
        title="Login"
      />
      <TouchableOpacity>
        <Text>Create Account</Text>
      </TouchableOpacity>
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
