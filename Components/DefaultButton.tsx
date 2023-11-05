import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function DefaultButton ({ buttonText, navigation }) {
    return (
        <View style={{ width: "100%" }}>
            <Pressable
                style={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.text}>{buttonText}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        width:"80%",
        margin: 35,
        borderRadius:10,
        height:50,
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0DF7DB",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
})
