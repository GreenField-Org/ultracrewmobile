import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function MyRaces({navigation}) {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>My Races</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('CreateRace')}
                >
                    <Text style={styles.text}>Create a New Race</Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('ActiveRaces')}
                >
                    <Text style={styles.text}>Active Races</Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('CompletedRaces')}
                >
                    <Text style={styles.textCompletedRaces}>Completed Races</Text>
                </Pressable>
            </View>
        )
    } else {
        return <View />
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: 50,
        borderRadius: 10,
        elevation: 3,
        marginTop: 15,
        backgroundColor: '#0DF7DB',
    },
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textCompletedRaces: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleText: {
        fontSize: 40,
        marginBottom: 50,
        fontFamily: "Lobster-Regular",
    },
});
