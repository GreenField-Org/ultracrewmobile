import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CompletedRaceStats() {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View>
                <Text>Completed race stats will go here</Text>
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
})