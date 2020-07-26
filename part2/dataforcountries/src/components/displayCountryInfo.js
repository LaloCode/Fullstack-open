import React, {useState} from 'react'
import axios from 'axios'

const DisplayCountryInfo = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState({})

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.name
    }

    axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
            console.log(response.data)
        })

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map((language) => (
                    <li key={language.name}>{language.name}</li>
                ))}
            </ul>
            <img src={country.flag} alt='country flag' width='100' height='100'/>
            <h3>Weather in {}</h3>
        </div>
    )
}

export default DisplayCountryInfo