import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeButton({ navigation }) {
    return (
        <View>
        <Button
        title="Home"
        style={styles.homebutton}
        onPress={() => navigation.navigate('Home')}
        />
        </View>
    )
    }

    const styles = StyleSheet.create({
        homebutton: {
            borderRadius: 100,
        }
    })