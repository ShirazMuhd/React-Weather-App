import React, { useState } from 'react';
import './search.css';
import fetchData from '../../axios/fetchApi';
import WeatherCard from '../weatherCard/WeatherCard'
import Loading from '../loading/loading'
import Text from '../no-weather/Text'


function Search() {
    const [query, setQuery] = useState('')
    const [Weather, setWeather] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(true)

    const search = () => {
        setLoading(true)
        setError(false)
        setWeather('')
        fetchData(query).then((response) => {
            setError(false)
            setLoading(false)
            setWeather(response)
            setQuery('')
        }).catch(() => {
            setLoading(false)
            setError(true)
            setWeather('')
            setQuery('')
        })
    }

    return (
        <React.Fragment>
            <div className="input-container">
                <input
                    type="text"
                    className="input"
                    placeholder="Enter your city name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && search()} />
                <button type="submit" onClick={search}><i className="fas fa-search"></i></button>
            </div>

            {
                Weather.main && <WeatherCard
                    name={Weather.name}
                    country={Weather.sys.country}
                    temp={Math.round(Weather.main.temp)}
                    description={Weather.weather[0].description}
                    img={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} />

            }

            {error && <Text />}
            {loading && <Loading />}

        </React.Fragment>
    )



}

export default Search;
