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
                        <Row style={styles.row}><Text style={styles.colText}>Date</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Total Time</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Average Pace</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Distance Run</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Calories Consumed</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Calories Burned</Text></Row>
                    </Col>
                    <Col>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.date}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.totalTime}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.averagePace}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.distanceRan} miles</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.calConsume} calories</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{completedRace.calBurned} calories</Text></Row>
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
    colText: {
        fontSize: 20
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
})