import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DefaultButton ({ buttonText }) {
    return (
        <View style={{ width: "100%" }}>
            <TouchableOpacity style={styles.loginButton}>
                <Text>{buttonText}</Text>
            </TouchableOpacity>
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
        backgroundColor:"#F8CD82",
    }
})