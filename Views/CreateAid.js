import React from 'react'
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Input from '../Components/FormComponents/Input';
import CountrySelect from '../Components/FormComponents/CountryPicker';

export default function CreateAid({navigation}) {
    return (
        <ScrollView style={styles.form}>
            <Text style={styles.titleText}>Create an Aid Station</Text>
            <Input 
                placeholder='Username'
            />
            <Input
                placeholder='First Name'
            />
            <Input 
                placeholder='Middle initial'
            />
            <Input 
                placeholder='Last Name'
            />
            <Input 
                placeholder='Date of birth'
            />
            <Input 
                placeholder='Weight'
                type = 'numeric'
            />
            <CountrySelect/>
            <Input 
                placeholder='Street address'
            />
            <Input 
                placeholder='Email'
            />
            <Input 
                placeholder='Telephone Number'
            />
            <Input 
                placeholder='User Tier'
            />

      <Button title='Create Aid Station' onPress={() => navigation.navigate('Race')}/>
      </ScrollView>
      

    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
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