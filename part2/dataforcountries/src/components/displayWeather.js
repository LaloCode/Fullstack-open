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
                setWeatherInfo(response.data)
            })
    }, [country.name])

    const firstUpdate = useRef(true)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        }
    }, [weatherInfo])

    if (!firstUpdate.current) {
        console.log(weatherInfo)
        return <h3>Weather in {weatherInfo.location.name}</h3>
    }

    return <div></div>
}

export default DisplayWeather