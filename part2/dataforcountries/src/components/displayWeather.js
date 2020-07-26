import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'

const DisplayWeather = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState({})

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.name
        }

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                console.log(response.data)
                setWeatherInfo(response.data)
            })
    }, [])

    const firstUpdate = useRef(true)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        }
    }, [weatherInfo])

    if (!firstUpdate.current) {
        firstUpdate.current = true
        return (    
            <div>
                <h3>Weather in {weatherInfo.location.name}</h3>
                <p><b>temperature: </b> {weatherInfo.current.temperature} Celcius</p>
                <img src={weatherInfo.current.weather_icons[0]} alt={weatherInfo.current.weather_descriptions[0]}/>
                <p><b>wind: </b> {weatherInfo.current.wind_speed} mph direction {weatherInfo.current.wind_dir}</p>
            </div>
        )
    }

    return <div></div>
}

export default DisplayWeather