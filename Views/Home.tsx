import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Pressable } from "react-native";
import { UserContext } from "../context/user-context";

export default function Home({ navigation }) {
    const user = useContext(UserContext);
    const profileImage = require("../assets/icons8-runner-32.png");
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("ProfilePage")}>
            <Image source={profileImage} style={styles.profileImage} />
            </Pressable>
            <Text style={styles.text}>Hello, {user.firstName}!</Text>
            <View style={styles.rowActiveContainer}>
                <Text style={styles.sectionHeader}>Active races</Text>
                <Pressable onPress={() => navigation.navigate("MyRaces")}>
                    <Text style={styles.smallText}>View all</Text>
                </Pressable>
            </View>
            <ScrollView horizontal style={styles.scrollContainer}>
                <>
                {user.races.map(race => {
                    <Text>{race.raceName}</Text>
                })}
                </>
            </ScrollView>
            <View style={styles.rowCompletedContainer}>
                <Text style={styles.sectionHeader}>Completed races</Text>
                <Pressable onPress={() => navigation.navigate("MyRaces")}>
                    <Text style={styles.smallText}>View all</Text>
                </Pressable>
            </View>
            <ScrollView horizontal style={styles.scrollContainer}>
                <>
                {user.races.map(race => {
                    <Text>{race.raceName}</Text>
                })}
                </>
            </ScrollView>
            {/*<View style={styles.rowButtonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("CreateRace")}
                >
                    <Text style={styles.buttonText}>Create a Race</Text>
                </Pressable>
            </View>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#C4C4C4",
    },
    smallText: {
        color: "#C4C4C4",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    rowActiveContainer: {
        flexDirection: "row",
        gap: 225,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    rowCompletedContainer: {
        flexDirection: "row",
        gap: 190,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    rowButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "#F8CD82",
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: "700",
        color: "#C4C4C4",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        width: "40%",
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 3,
        marginTop: 15,
        backgroundColor: "#0DF7DB",
    },
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c",
        alignItems: "center",
        paddingTop: 20,
    },
    scrollContainer: {
        width: "90%",
        backgroundColor: "#C4C4C4",
    },
});
