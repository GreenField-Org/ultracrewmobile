import React from 'react'
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import Input from '../Components/FormComponents/Input';
import CountrySelect from '../Components/FormComponents/CountryPicker';
import PickerComponent from '../Components/FormComponents/Picker';

export default function CreateAid({navigation}) {
let raceList = ['race one', 'race two', 'race three']

    return (
      <View style={styles.container}>
            <Text style={styles.titleText}>Create an Aid Station</Text>
            <Input 
                placeholder='Aid Station Name'
            />
            <Input
                placeholder='Distance Point'
                type = 'numeric'
            />
            <Pressable style={styles.submitButton}><Text>Create Aid Station</Text>
            </Pressable>
      </View>
      

    )}

    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        flex: 1,
      },
      
        titleText:{
          fontSize: 25,
          paddingLeft: 58,
          paddingRight: 58,
          padding: 20,
          fontSize: 30
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
        submitButton:
       {
         width:"80%",
         borderRadius:10,
         height:50,
         fontSize: 20,
         marginTop: 10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"#0DF7DB",
       }
       })