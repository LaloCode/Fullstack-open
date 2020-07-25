import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './findCountries'
import ShowCountries from './showCountries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchCountry, setSearchCountry] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleSearchCountryOnChange = (event) => {
        setSearchCountry(event.target.value)
    }

    return (
        <div>
            <FindCountries value={searchCountry} handleSearchCountryOnChange={handleSearchCountryOnChange}/>
            <ShowCountries countries={countries} searchCountry={searchCountry} setSearchCountry={setSearchCountry}/>
        </div>
    )
}

export default App