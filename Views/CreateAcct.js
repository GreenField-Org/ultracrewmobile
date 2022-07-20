import React from 'react'
import { StyleSheet, Button, Text, ScrollView, View } from 'react-native';
import Input from '../Components/FormComponents/Input';
import CountrySelect from '../Components/FormComponents/CountryPicker';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateAcct({navigation}) {
  const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <ScrollView style={styles.form}>
                <Text style={styles.titleText}>Create an Account</Text>
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

          <Button title='Create Account' onPress={() => navigation.navigate('Home')}/>
          </ScrollView>
          

        )
    } else {
        return <View /> 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: { 
        fontSize: 25,
        backgroundColor: 'orange',
        paddingLeft: 58,
        paddingRight: 58,
        fontFamily: "Lobster-Regular",
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
    submitButton: {
        width:"80%",
        borderRadius:10,
        height:50,
        fontSize: 20,
        marginTop: 10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange",
    },
    form: {
        backgroundColor: '#F8CD82',
    }
})