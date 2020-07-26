import React from 'react'
import ListCountry from './listCountry'
import DisplayCountryInfo from './displayCountryInfo'

const ShowCountries = ({countries, searchCountry, setSearchCountry}) => {
    const filteredCountries = countries.reduce((accumulator, currentValue) => {
        if (currentValue.name.toLowerCase().includes(searchCountry.toLowerCase())) {
            return (accumulator.concat(currentValue))
        }
        return (accumulator)
    }, [])

    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (filteredCountries.length > 1) {
        return (
            filteredCountries.map((country) => (
                <ListCountry key={country.name} country={country} setSearchCountry={setSearchCountry}/>
            ))
        )
    }
    else if (filteredCountries.length > 0) {
        return (
            <DisplayCountryInfo country={filteredCountries[0]}/>
        )
    }

    return <div></div>
}

export default ShowCountries