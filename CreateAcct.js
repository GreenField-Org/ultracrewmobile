import React from 'react'
import { StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateAcct() {
    return (
        <View style={styles.form}>
            <Text>Create an Account</Text>

            <TextInput
                style={styles.TextInput}
                placeholder="Username"
                placeholderTextColor="#003f5c"      
            />
            <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="#003f5c"      
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Middle Initial"
                placeholderTextColor="#003f5c"      
        />
        <TextInput
            style={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor="#003f5c"      
        />
        <TextInput
            style={styles.TextInput}
            //what way do we want to do DOB?
            placeholder="Date of Birth"
            placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="Weight"
        placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="Country"
        placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="Street Address"
        placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="Telephone Number"
        placeholderTextColor="#003f5c"      
        />
        <TextInput
        style={styles.TextInput}
        placeholder="User Tier"
        placeholderTextColor="#003f5c"      
        />

        <TouchableOpacity style={styles.submitButton}>
            <Text stye={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      

    )}

    const styles = StyleSheet.create({
        form: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
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
          padding: 5,
          marginLeft: 20,
        },
      
        btnText: {
      
        },
      
        submitButton:
       {
         width:"80%",
         borderRadius:10,
         height:50,
         fontSize: 20,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"orange",
       }