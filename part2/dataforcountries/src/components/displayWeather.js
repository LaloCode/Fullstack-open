import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'

const DisplayWeather = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const fetched = useRef(false)

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.name
        }

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                fetched.current = true
                setWeatherInfo(response.data)
            })
    }, [])

    if (fetched.current) {
        return (    
            <div>
                <h3>Weather in {weatherInfo.location.name}</h3>
                <p><b>temperature: </b> {weatherInfo.current.temperature} Celcius</p>
                <img src={weatherInfo.current.weather_icons[0]} alt={weatherInfo.current.weather_descriptions[0]}/>
                <p><b>wind: </b> {weatherInfo.current.wind_speed} mph direction {weatherInfo.current.wind_dir}</p>
            </div>
        )
    }
    
    return (<div></div>)
}

export default DisplayWeather