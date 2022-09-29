import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useFonts } from "expo-font";
import user from '../assets/data';

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this should be moved to the Views folder ones all pages have been merged to main */

export default function CompletedRaces({navigation}) {
    const [fontsLoaded] = useFonts(customFont);
    const [races] = useState(user.races.filter(x => x.date < new Date()));

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Completed Races</Text>
                {races.map(race =><Pressable onPress={() => navigation.navigate('CompletedRaceStats')} key={race.id}><Text>{race.raceName}</Text></Pressable>)}
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