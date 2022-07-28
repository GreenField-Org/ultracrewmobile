import React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { useFonts } from "expo-font";

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

/* this should be moved to the Views folder ones all pages have been merged to main */

export default function CompletedRaces() {
    const [fontsLoaded] = useFonts(customFont);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Completed Races</Text>
                <FlatList
                data={[
                  {key: 'Devin'},
                  {key: 'Dan'},
                  {key: 'Dominic'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </View>
        )
    } else {
        return <View/>
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        marginBottom: 50,
        fontFamily: "Lobster-Regular",
    },
    container: {
        backgroundColor: '#F8CD82',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})