import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this should be moved to the Views folder ones all pages have been merged to main */

export default function CompletedRaces() {
    const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View>
                <Text style={styles.titleText}>Completed Races</Text>
            </View>
        )
    } else {
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