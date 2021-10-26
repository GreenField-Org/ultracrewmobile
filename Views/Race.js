import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* this should be moved to the Views folder ones all pages have been merged to main */

export default function Race({ name }) {
    return (
        <View>
            <Text>Race {name}</Text>
        </View>
    )
}