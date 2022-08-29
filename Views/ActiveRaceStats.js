import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { FlatList } from 'react-native-web';

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

    const renderStationNum = ({ item }) => (
        <Text>{item.stationNum}</Text>
      );

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{raceData.raceName}</Text>
                <View style={styles.dataContainer}>
                    <View style={styles.stationNumCont}>
                    <Text style={styles.headerText}>Station</Text>
                        {raceData.aidStation.map((station) => {
                            return(
                                <Text>{station.stationNum}</Text>
                            )
                        })}
                    </View>
                    <View style={styles.stationTimeCont}>
                    <Text style={styles.headerText}>Time Spent</Text>
                    {raceData.aidStation.map((station) => {
                        return(
                            <Text>{station.timeSpent}</Text>
                        )
                    })}
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
        width: 100,
        alignItems: 'center'
    },
    stationTimeCont :{
        width: 100,
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold'
    }
    
})