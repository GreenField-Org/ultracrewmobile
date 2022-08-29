import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

const profileInfo = [{
    name: 'Hanna Littlefield'},
    {age: 31},
    {location: 'Taunton, MA'},
    {weight: 138},
    {email: 'hannamlittlefield@gmail.com'},
    {telephoneNumber: '443-454-18613'},
    {userTier: 3}
]

export default function ProfilePage({navigation}) {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Name</Text>
                
            </View>
        )   
    } else {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        marginBottom: 50,
        fontFamily: 'Lobster-Regular',
    },
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})