import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function Date({mode = 'date'}) {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.textVal}>
            <RNDateTimePicker 
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textVal: { 
        margin: 50, 
        width: 100
    }
})