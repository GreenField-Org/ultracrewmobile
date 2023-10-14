import React, { useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
          <View style={styles.container}>
            <Text style={styles.titleText}>Ultra Crew App</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setUsername(username)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="password"
                placeholderTextColor="#003f5c"
                //should we add option to show pw when you're done typing it?
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <Pressable
              title="Login"
              style={styles.loginButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.text}>Login</Text>
            </Pressable>

            <Pressable
              title="Create an Account"
              style={styles.createAcctBtn}
              onPress={() => navigation.navigate("CreateAcct")}
            >
              <Text style={styles.createAcctBtn}>Create an Account</Text>
            </Pressable>
          </View>
        )
    } else {
        return <View />
    }
}

const styles = StyleSheet.create({
    createAcctBtn: {
        fontSize: 20,
    },
    container: {
        backgroundColor: "#F8CD82",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    titleText: {
        fontSize: 50,
        marginBottom: 50,
        fontFamily: "Lobster-Regular",
    },
    inputView: {
        backgroundColor: "#EBEBEB",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
        textAlign: "center",
    },
    createAcct: {
        marginTop: 60,
    },
    loginButton: {
        width: "80%",
        borderRadius: 10,
        marginBottom: 35,
        height: 50,
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0DF7DB",
        fontWeight: 700,
    },
});
