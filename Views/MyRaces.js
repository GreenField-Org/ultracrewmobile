import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import DefaultButton from '../Components/DefaultButton';

/* This should be moved into the View folder once all pages are merged into main */

export default function MyRaces({navigation}) {
    return (
        <View>
            <Button 
                title='Create A New Race'
                onPress={() => navigation.navigate('CreateRace')}/>
            <Button 
                title='Current Race'
                onPress={() => navigation.navigate('CurrentRaces')}/>
            <Button 
                title='Completed Races'
                onPress={() => navigation.navigate('CompletedRaces')}/>
        </View>
    )
}