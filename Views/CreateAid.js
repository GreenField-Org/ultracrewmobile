import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../Components/FormComponents/Input';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateAid({navigation}) {
    const [fontsLoaded] = useFonts(customFont);
    const [time, setTime] = useState(new Date().toLocaleString());

    function timeEntered(){
        setTime(new Date().toLocaleString())
    }

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                  <Text style={styles.titleText}>Create an Aid Station</Text>
                  <Pressable style={styles.submitButton}
                    onPress={timeEntered}>
                        <Text>Entered Aid</Text>
                  </Pressable>
                  <Input
                      placeholder='Distance Point'
                      type = 'numeric'
                  />
                  <Pressable style={styles.submitButton}>
                    <Text>Create Aid Station</Text>
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