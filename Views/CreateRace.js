import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../Components/FormComponents/Input';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateRace({navigation}) {
    const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
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

            <Pressable style={styles.submitButton}>
                <Text>Create Race</Text>
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
        fontSize: 30,
        marginBottom: 50,
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
        backgroundColor:"#0DF7DB",
    }
})
