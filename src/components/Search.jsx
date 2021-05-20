import React, { useState } from 'react';
import './search.css';
import fetchWeather from '../axios/fetchApi';
import WeatherCard from './WeatherCard'


function Search() {
    const [query, setQuery] = useState('')
    const [Weather, setWeather] = useState({})

    const search = (e) => {
        const data = fetchWeather(query)

        setWeather(data)
        console.log(Weather);
    }

    return (
        <React.Fragment>
            <div className="input-container">
                <input
                    type="text"
                    className="input"
                    placeholder="Enter your city name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" onClick={search}><i className="fas fa-search"></i></button>
            </div>

            {Weather.main && (
                <h1>Temperature</h1>
            )}
        </React.Fragment>
    )



}

export default Search;
