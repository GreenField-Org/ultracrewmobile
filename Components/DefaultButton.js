import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DefaultButton ({ buttonText }) {
    return (
        <View>
            <TouchableOpacity style={styles.loginButton}>
                <Text>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        width:"80%",
        borderRadius:10,
        height:50,
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F8CD82",
    }
})