import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Col, Row, Grid } from "react-native-easy-grid";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

const completedRace = {
    name: "Cocodona",
    date: "August 4, 2020",
    totalTime: "4:44:44",
    averagePace: "12:34/mile",
    distanceRan: 250,
    calConsume: 1234,
    calBurned: 5678
}

export default function CompletedRaceStats() {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{completedRace.name}</Text>
                <Grid>
                    <Col>
                        <Row><Text>Date</Text></Row>
                        <Row><Text>Total Time</Text></Row>
                        <Row><Text>Average Pace</Text></Row>
                        <Row><Text>Distance Run</Text></Row>
                        <Row><Text>Calories Consumed</Text></Row>
                        <Row><Text>Calories Burned</Text></Row>
                    </Col>
                    <Col>
                        <Row><Text>{completedRace.date}</Text></Row>
                        <Row><Text>{completedRace.totalTime}</Text></Row>
                        <Row><Text>{completedRace.averagePace}</Text></Row>
                        <Row><Text>{completedRace.distanceRan} miles</Text></Row>
                        <Row><Text>{completedRace.calConsume} calories</Text></Row>
                        <Row><Text>{completedRace.calBurned} calories</Text></Row>
                    </Col>
</Grid>
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
        justifyContent: 'center',
        flex: 1,
    },
})