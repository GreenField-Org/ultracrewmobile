import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function Input({ placeholder, type = 'default', value, onChange }) {
    return (
        <View style={styles.inputView}>
            <TextInput 
                style={styles.textInput}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
                placeholderTextColor="#003f5c"
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "lightgray",
        borderRadius: 5,
        width: "85%",
        height: 45,
        margin: 30,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        flex: 1,
        fontSize: 20,
    }
})