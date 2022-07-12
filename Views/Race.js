import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this is for the current race in progress */

export default function Race({ name }) {
    const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View>
                <Text style={styles.titleText}>Race {name}</Text>
            </View>
        )
    } else  {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: { 
        fontSize: 25,
        backgroundColor: 'orange',
        paddingLeft: 58,
        paddingRight: 58,
        fontFamily: "Lobster-Regular",
    }, 
})