import React from "react"
import CountrySelectDropdown from "react-native-searchable-country-dropdown"

export default function CountrySelect(){
    return(

    <CountrySelectDropdown
        //defaultCountry={'US'}
        textColor={"black"}
        countrySelect= { () => {} }
    />
    )}