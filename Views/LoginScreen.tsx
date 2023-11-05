import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";

const customFont = {
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fontsLoaded] = useFonts(customFont);
    const logo = require("../assets/runLogo.png");

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Ultra Crew App</Text>
                <Image source={logo} />
                <View style={styles.loginBox}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setUsername(username)}
                        inputMode="email"
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="password"
                        placeholderTextColor="#003f5c"
                        //should we add option to show pw when you're done typing it?
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />

                    <Pressable
                        style={styles.loginButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.text}>Login</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate("CreateAcct")}
                    >
                        <Text style={styles.createAcctBtn}>
                            Create an Account
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    } else {
        return <View />;
    }
}

const styles = StyleSheet.create({
    createAcctBtn: {
        fontSize: 14,
        color: "#FF9001",
    },
    container: {
        backgroundColor: "#1c1c1c",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    titleText: {
        fontSize: 50,
        marginBottom: 0,
        paddingTop: 10,
        fontFamily: "Lobster-Regular",
        color: "#FF9001",
    },
    loginBox: {
        alignItems: "center",
        borderColor: "#FF9001",
        borderWidth: 1,
        boxShadow: "#FF9001",
        borderRadius: 30,
        width: "100%",
        paddingVertical: 100,
        paddingHorizontal: 10,
        marginTop: 0,
        bottom: -30,
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    },
    TextInput: {
        backgroundColor: "#C4C4C4",
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#FF9001",
        padding: 20,
        width: 300,
        borderRadius: 50,
        flex: 1,
        fontSize: 20,
        marginVertical: 10,
        textAlign: "center",
    },
    createAcct: {
        marginTop: 60,
        marginBottom: 60,
    },
    loginButton: {
        width: "40%",
        borderRadius: 50,
        marginBottom: 35,
        marginTop: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0DF7DB",
        fontWeight: "700",
    },
});
