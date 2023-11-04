import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { StyleSheet, View, TextInput } from 'react-native';

export interface InputProps {
    placeholder: string;
    type?: KeyboardTypeOptions;
    value?: string;
    onChange?: () => void;
}

export default function Input({ placeholder, type = 'default', value, onChange }: InputProps) {
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
        margin: 5,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        flex: 1,
        fontSize: 20,
    }
})