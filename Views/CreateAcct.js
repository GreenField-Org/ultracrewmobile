import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable,} from 'react-native';
import Input from '../Components/FormComponents/Input';
import { useFonts } from "expo-font";
import PhoneInput from 'react-native-phone-input';

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateAcct({navigation}) {
  const [fontsLoaded] = useFonts(customFont);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState(null);

  const handleSumbit = () => {

    if(!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid Email');
        return;
    } else { 
        setEmailError(null);
    }

    navigation.navigate("Home");
  }

    if (fontsLoaded) {
        return (
            <View style={styles.container}
            >
                <Text style={styles.titleText}>Create an Account</Text>
                <Input style={styles.inputView}
                    placeholder='Username'
                />
                <Input
                    placeholder='First Name'
                />
                <Input 
                    placeholder='Middle initial'
                />
                <Input 
                    placeholder='Last Name'
                />
                <Input 
                    placeholder='Date of birth'
                />
                <Input 
                    placeholder='Weight'
                    type = 'numeric'
                />
                <Input 
                placeholder='Country'
                />
                <Input 
                    placeholder='Street address'
                />
                <Input 
                    type='email-address'
                    placeholder='Email'
                    autoCapitalize="none"
                    autoComplete={false}
                    onChange={text => setEmail(text)}
                    value={email}
                />
                {emailError && <Text style={styles.error}>{emailError}</Text>}
                <PhoneInput
                    style={styles.phoneInputView}
                    initialValue={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                    initialCountry="us"
                    textProps={{
                        placeholder: 'Phone Number'
                    }}
                />
                <Input 
                    placeholder='User Tier'
                />

                <Pressable
                title="Create Account"
                style={styles.submitButton}
                onPress={handleSumbit}
                >
                    <Text style={styles.text}>Create Account</Text>
                </Pressable>
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
    error: {
        color: 'rgb(255,0,0)',
    },
    titleText: { 
        fontSize: 25,
        textAlign: 'center',
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
    phoneInputView: {
        backgroundColor: "lightgray",
        borderRadius: 5,
        width: "85%",
        height: 45,
        alignItems: "center",
        paddingLeft: 10
    },
    submitButton: {
        width: "80%",
        borderRadius: 10,
        marginBottom: 35,
        height: 50,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0DF7DB",
        fontWeight: 700,
    },
})