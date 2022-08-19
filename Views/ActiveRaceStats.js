import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function ActiveRaceStats() {
    let [fontsLoaded] = useFonts(customFont);
    const raceData = {
        raceName: 'Anchor Down Ultra',
        aidStation: [{
            stationNum: 1,
            timeSpent: '1234'},
            {stationNum: 2,
            timeSpent: '5678'},
            {stationNum: 3,
            timeSpent: '9101'},
            {stationNum: 4,
            timeSpent: '1213'}
        ]
    }


    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{raceData.raceName}</Text>
                <View style={styles.dataContainer}>
                    <View style={styles.stationNumCont}>
                        <Text>Station Num Here</Text>
                    </View>
                    <View style={styles.stationTimeCont}>
                        <Text> 10:01</Text>
                    </View>
                </View>

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
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        flex: 1,
    },
    dataContainer: {
        flexDirection: 'row'
    },
    stationNumCont: {
        width: 50
    },
    stationTimeCont :{
        width: 50
    }
    
})