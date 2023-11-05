import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Col, Row, Grid } from "react-native-easy-grid";

const customFont = {
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

const station = {
    distancePoint: '13.1',
    entranceTimestamp: "9/22/2022 11:42:12PM",
    food: "chips, ramen",
    liquids: "16oz",
    mood: "2",
    notes: "number 1, no pain",
    exitTimeStamp: "9/22/2022 11:50:15PM"
}

export default function AidStationStats({ aidStationName }) {
    let [fontsLoaded] = useFonts(customFont);

    if(fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{aidStationName}</Text>
                <Grid>
                    <Col>
                        <Row style={styles.row}><Text style={styles.colText}>Distance</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Entrance</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Food</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Liquids</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Mood</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Notes</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>Exit</Text></Row>
                    </Col>
                    <Col>
                        <Row style={styles.row}><Text style={styles.colText}>{station.distancePoint}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.entranceTimestamp}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.food}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.liquids}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.mood}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.notes}</Text></Row>
                        <Row style={styles.row}><Text style={styles.colText}>{station.exitTimeStamp}</Text></Row>
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
        borderBottomColor: 'black',
        height: 50
    }
})