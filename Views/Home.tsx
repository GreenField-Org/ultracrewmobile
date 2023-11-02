import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Pressable } from "react-native";
import { UserContext } from "../context/user-context";

export default function Home({ navigation }) {
    const user = useContext(UserContext);
    const profileImage = require("../assets/icons8-runner-32.png");
    return (
        <View style={styles.container}>
            <Image source={profileImage} style={styles.profileImage} />
            <Text style={styles.text}>Hello, {user.firstName}!</Text>
            <View style={styles.rowContainer}>
                <Text style={styles.sectionHeader}>My races</Text>
                <Pressable onPress={() => navigation.navigate("MyRaces")}>
                    <Text style={styles.smallText}>View all</Text>
                </Pressable>
            </View>
            <View style={styles.scrollContainer}></View>
            <View style={styles.rowButtonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("ProfilePage")}
                >
                    <Text style={styles.buttonText}>My Profile</Text>
                </Pressable>
                {/*will need to add functional nagivation*/}
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("CreateRace")}
                >
                    <Text style={styles.buttonText}>Create a Race</Text>
                </Pressable>
            </View>
            <View style={styles.rowButtonContainer}>
                {/*will need to add functional nagivation*/}
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate()}
                >
                    <Text style={styles.buttonText}>Settings</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </View>
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
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 200,
        paddingVertical: 10,
    },
    rowButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10,
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
        height: 200,
    },
});
