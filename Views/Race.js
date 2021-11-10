import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* this is for the current race in progress */

export default function Race({ name }) {
    return (
        <View>
            <Text>Race {name}</Text>
        </View>
    )
}