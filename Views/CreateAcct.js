import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView} from 'react-native';
import Input from '../Components/FormComponents/Input';
import { useFonts } from "expo-font";
import PhoneInput from 'react-native-phone-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';

const customFont = {
  "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
};

export default function CreateAcct({navigation}) {
  const [fontsLoaded] = useFonts(customFont);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState('');
  const [userTier, setUserTier] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  //fetch countries returns an array of objects use {name:{common}} to list
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all', {credentials: 'omit'})
        .then(response => response.json())
        .then(data => setCountries(data.map(country => {
            return country.name.official
        })))
        .catch(error => console.error('Error: ', error))
  }, [])

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }

  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleSumbit = async () => {

    // prelim validatation of email 
    if(!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid Email');
        return;
    } else { 
        setEmailError(null);
    }

    await fetch('http://192.168.1.77:5000/api/user/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            middleInitial: middleInitial,
            password: password,
            dob: date,
            weight: weight,
            country: country,
            address: address,
            email: email,
            phoneNum: phoneNumber,
            userTier: userTier
        })
      })
      .then(result => console.log(result))
      .catch(function (error) {
        console.log("Error");
        // ADD THIS THROW error
        throw error;
      });

    navigation.navigate("Home");
  }

    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}
            >
                <Text style={styles.titleText}>Create an Account</Text>
                <Input style={styles.inputView}
                    placeholder='Username'
                    onChangeText={setUserName}
                />
                <Input style={styles.inputView}
                    placeholder='Password'
                    onChangeText={setPassword}
                />
                <Input
                    placeholder='First Name'
                    onChangeText={setFirstName}
                />
                <Input 
                    placeholder='Middle initial'
                    onChangeText={setMiddleInitial}
                />
                <Input 
                    placeholder='Last Name'
                    onChangeText={setLastName}
                />
                <Text>Date of Birth:  </Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onDateChange}
                    display="calendar"
                    style={{width: "100%", marginRight: 300, marginTop: -80}}
                />
                <Input 
                    placeholder='Weight'
                    type = 'numeric'
                    onChangeText={setWeight}
                />
                <SelectDropdown 
                    buttonStyle={styles.ButtonInput}
                    data={countries.sort()}
                    onSelect={selectedItem => {
                        setCountry(selectedItem)
                    }}
                    buttonTextAfterSelection={selectedItem => {
                        return selectedItem;
                    }}
                    rowTextForSelection={item => {
                        return item;
                    }}
                    defaultButtonText={'Country'}
                />
                <Input 
                    placeholder='Street address'
                    onChangeText={setAddress}
                />
                <Input 
                    type='email-address'
                    placeholder='Email'
                    autoCapitalize="none"
                    autoComplete={false}
                    onChange={setEmail}
                    value={email}
                />
                {emailError && <Text style={styles.error}>{emailError}</Text>}
                <PhoneInput
                    style={styles.phoneInputView}
                    initialValue={phoneNumber}
                    onChangeText={setPhoneNumber}
                    initialCountry="us"
                    textProps={{
                        placeholder: 'Phone Number'
                    }}
                />
                <Input 
                    placeholder='User Tier'
                    onChangeText={setUserTier}
                />

                <Pressable
                title="Create Account"
                style={styles.submitButton}
                onPress={handleSumbit}
                >
                    <Text style={styles.text}>Create Account</Text>
                </Pressable>
          </ScrollView>
          </SafeAreaView>
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
        paddingTop: 400,
        paddingBottom: 350
    },
    scrollview: {
        backgroundColor: '#F8CD82',
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
    ButtonInput: {
        width: '85%',
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