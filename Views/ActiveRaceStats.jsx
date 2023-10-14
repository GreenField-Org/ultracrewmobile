import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function ActiveRaceStats({ navigation }) {
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
                <Pressable 
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('CreateAid')}
                    >
                        <Text>Add New Aid Station</Text>
                </Pressable>
                <View style={styles.dataContainer}>
                    <View style={styles.stationNumCont}>
                    <Text style={styles.headerText}>Station</Text>
                        {raceData.aidStation.map((station) => {
                            return(
                                <Pressable 
                                    onPress={() => navigation.navigate('AidStation')}
                                    key={station.id}>
                                    <Text>{station.stationNum}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                    <View style={styles.stationTimeCont}>
                    <Text style={styles.headerText}>Time Spent</Text>
                    {raceData.aidStation.map((station) => {
                        return(
                            <Text key={station.id}>{station.timeSpent}</Text>
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
    },
    submitButton: {
        width:"80%",
        borderRadius:10,
        height:50,
        fontSize: 20,
        marginBottom: 20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0DF7DB",
    }
})