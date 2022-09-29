import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../Components/FormComponents/Input';
import { useFonts } from "expo-font";
import user from '../assets/data';

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateRace({navigation}) {
    const [fontsLoaded] = useFonts(customFont);
    const [isDisabled, setDisabled] = useState(true);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

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
        inputView: {
            backgroundColor: "lightgray",
            borderRadius: 10,
            width: "80%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        TextInput: {
            height: 50,
            flex: 1,
            fontSize: 20,
            marginTop: 5,
            padding: 5,
            marginLeft: 20,
            backgroundColor: 'lightgray',
            borderRadius: 10
        },
        inputView: {
            backgroundColor: "lightgray",
            borderRadius: 5,
            width: "80%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        submitButton: {
            width:"80%",
            borderRadius:10,
            height:50,
            fontSize: 20,
            marginTop: 10,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: isDisabled ? "#ffff" : "#0DF7DB",
        },
    });

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
            <Text style={styles.titleText}>Create a Race</Text>
            <Input 
                onChange={() => {
                    if(isDisabled == true) {
                        setDisabled(false)
                    }
                    setName()
                }}
                placeholder='Race Name'
                value={name}
            />
            <Input
                onChange={() => {
                    if(isDisabled == true) {
                        setDisabled(false)
                    }
                    setDate()
                }}
                placeholder='Date'
                value={date}
            />
            <Input 
                onChange={() => {
                    if(isDisabled == true) {
                        setDisabled(false)
                    }
                    setDistance()
                }}
                placeholder='Distance/Goal'
                type = 'numeric'
                value={distance}
            />
            <Input 
                onChange={() => {
                    if(isDisabled == true) {
                        setDisabled(false)
                    }
                    setTime()
                }}
                placeholder='Time Allotted'
                value={time}
            />
            <Input 
                onChange={() => {
                    if(isDisabled == true) {
                        setDisabled(false)
                    }
                    setLocation()
                }}
                placeholder='Location'
                value={location}
            />

            <Pressable
                disabled={isDisabled} 
                style={styles.submitButton} onPress={() => {
                    user.races = [...user.races, {
                        "id": Math.random(),
                        "raceName": name,
                        "date": date,
                        "distance/goal": distance,
                        "timeAlotted": time,
                        "location": location,
                        "aidStations": []
                    }];

                    setName('');
                    setDate('');
                    setDistance('');
                    setTime('');
                    setLocation('');
                    setDisabled(true);
                    }}
            >
                <Text>Create Race</Text>
            </Pressable>
          </View>
        )
    } else {
        return <View />
    }
}
