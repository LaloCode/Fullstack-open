import React from 'react'
import DisplayWeather from './displayWeather'

const DisplayCountryInfo = ({country}) => {

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
            <DisplayWeather country={country}/>
        </div>
    )
}

export default DisplayCountryInfo