import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function MyRaces({navigation}) {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>My Races</Text>
                <Button 
                    title='Create A New Race'
                    onPress={() => navigation.navigate('CreateRace')}/>
                <Button 
                    title='Current Race'
                    onPress={() => navigation.navigate('CurrentRace')}/>
                <Button 
                    title='Completed Races'
                    onPress={() => navigation.navigate('CompletedRaces')}/>
            </View>
        )
    } else {
        return <View />
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    titleText: {
        fontSize: 30,
        marginBottom: 50,
        fontFamily: "Lobster-Regular",
    },
});
