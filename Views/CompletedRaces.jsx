import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this should be moved to the Views folder ones all pages have been merged to main */

export default function CompletedRaces({navigation}) {
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
                <Text style={styles.titleText}>Completed Races</Text>
                {raceList.map(race =><Pressable style={styles.listButton} onPress={() => navigation.navigate('CompletedRaceStats')}><Text style={styles.listText}>{race.raceName}</Text></Pressable>)}
            </View>
        )
    } else {
        return (
            <View>
                <Text style={styles.titleText}>Completed Races</Text>
                <Text>no completed races</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        marginVertical: 50,
        fontFamily: "Lobster-Regular",
        paddingHorizontal: 50,
    },
    container: {
        backgroundColor: '#F8CD82',
        flex: 1,
    },
    listButton: {
        height: 40,
        width: '100%',
        textAlign: 'center',
    },  
    listText: {
        fontSize: 18,
        paddingHorizontal: 100,
    },
})