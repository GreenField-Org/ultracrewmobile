import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function ActiveRaceStats({ navigation }) {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View>
                <Text>Active race stats will go here</Text>
                <Pressable
                title="Login"
                style={styles.createAidButton}
                onPress={() => navigation.navigate("CreateAid")}
              >
                <Text style={styles.text}>Log Aid Station</Text>
              </Pressable>
            </View>
        )   
    } else {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        marginBottom: 50,
        fontFamily: 'Lobster-Regular',
    },
    createAidButton: {
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