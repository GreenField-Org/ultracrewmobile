import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker({mode = 'date'}) {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.textVal}>
            <RNDateTimePicker 
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
        width: 100,
        margin: 100
    }
})