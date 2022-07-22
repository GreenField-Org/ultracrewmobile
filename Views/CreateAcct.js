import React from 'react'
import { StyleSheet, Button, Text, ScrollView, View, Pressable,} from 'react-native';
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
            <View style={styles.container}
            >
                <Text style={styles.titleText}>Create an Account</Text>
                <Input style={styles.inputView}
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
                <Input 
                placeholder='Country'
                />
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

                <Pressable
                title="Create Account"
                style={styles.submitButton}
                onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.text}>Create Account</Text>
                </Pressable>
          </View>
        )
    } else {
        return <View /> 
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    titleText: { 
        fontSize: 25,
        textAlign: 'center',
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
        width: "80%",
        borderRadius: 10,
        marginBottom: 35,
        height: 50,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0DF7DB",
        fontWeight: 700,
    },
})