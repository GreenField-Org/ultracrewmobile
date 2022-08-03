import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this is for the current race in progress */

export default function ActiveRaces({navigation}) {
    const [fontsLoaded] = useFonts(customFont);
    const raceList = [{
        raceName: 'Anchor Down'},
        {raceName: 'Bear Chase'},
        {raceName: 'GD Lemondrop'},
        {raceName:'Backyard Ultra'},
        {raceName: '666'},
        {raceName: 'Hamsterwheel'},
        {raceName: 'Ethan Allan'}
        ]

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Active Races</Text>
                {raceList.map(race =><Pressable onPress={() => navigation.navigate('ActiveRaceStats')}><Text>{race.raceName}</Text></Pressable>)}
            </View>
        )
    } else {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        marginBottom: 50,
        fontFamily: "Lobster-Regular",
    },
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})