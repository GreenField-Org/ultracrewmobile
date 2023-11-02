import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from "expo-font";
import EditPencil from '../assets/EditPencil.png'

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

const profileInfo = {
    name: 'Hanna Littlefield',
    age: 31,
    location: 'Taunton, MA',
    weight: 138,
    email: 'hannamlittlefield@gmail.com',
    telephoneNumber: '443-454-18613',
    userTier: 3
    }

export default function ProfilePage({}) {
    let [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{profileInfo.name}</Text>
                <Text style={styles.dataText}>{profileInfo.age}</Text>
                <Text style={styles.dataText}>{profileInfo.location}</Text>
                <Text style={styles.dataText}>{profileInfo.weight}</Text>
                <Text style={styles.dataText}>{profileInfo.email}</Text>
                <Text style={styles.dataText}>{profileInfo.telephoneNumber}</Text>
                <Text style={styles.dataText}>{profileInfo.userTier}</Text>
                    <Image source={EditPencil}/>
            </View>
        )   
    } else {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'Lobster-Regular',
    },
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    dataText:{
        fontSize: 20,
    }
})