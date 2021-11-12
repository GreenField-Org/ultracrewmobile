import React from 'react'
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DefaultButton from '../Components/DefaultButton';
import Input from '../Components/FormComponents/Input';

export default function CreateRace({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Create a Race</Text>
            <Input 
                placeholder='Race Name'
            />
            <Input
                placeholder='Date'
            />
            <Input 
                placeholder='Distance/Goal'
                type = 'numeric'
            />
            <Input 
                placeholder='Time Allotted'
            />
            <Input 
                placeholder='Location'
            />

      <DefaultButton buttonText='Create Race'/>
      </View>
      

    )}

    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      
        titleText:{
          fontSize: 25,
          backgroundColor: 'orange',
          paddingLeft: 58,
          paddingRight: 58

        },
      
        inputView: {
          backgroundColor: "lightgray",
          borderRadius: 10,
          width: "80%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        },
        
        TextInput: {
          height: 50,
          flex: 1,
          fontSize: 20,
          marginTop: 5,
          padding: 5,
          marginLeft: 20,
          backgroundColor: 'lightgray',
          borderRadius: 10
        },

        inputView: {
          backgroundColor: "lightgray",
          borderRadius: 5,
          width: "80%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        },

        btnText: {
      
        },
      
        submitButton:
       {
         width:"80%",
         borderRadius:10,
         height:50,
         fontSize: 20,
         marginTop: 10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"orange",
       }
       })