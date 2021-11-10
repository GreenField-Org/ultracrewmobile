import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DefaultButton from '../Components/DefaultButton';

/* This should be moved into the View folder once all pages are merged into main */

export default function MyRaces({navigation}) {
    return (
        <View>
            <DefaultButton 
                buttonText='Create A New Race'
                onPress={() => navigation.navigate('MyRaces')}/>
            <DefaultButton 
                buttonText='Current Races'
                onPress={() => navigation.navigate('CurrentRaces')}/>
            <DefaultButton 
                buttonText='Completed Races'
                onPress={() => navigation.navigate('CompletedRaces')}/>
        </View>
    )
}