import React, { useState } from 'react';
import './search.css';
import fetchWeather from '../axios/fetchApi';
import WeatherCard from './WeatherCard'


function Search() {
    const [query, setQuery] = useState('')
    const [Weather, setWeather] = useState({})

    const search = async (e) => {
        
          const data = await fetchWeather(query)
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
                    onChange={(e) => setQuery(e.target.value)}/>
                <button type="submit" onClick={search}><i className="fas fa-search"></i></button>
            </div>

            {Weather.main && <WeatherCard
             name={Weather.name}
             country={Weather.sys.country} 
             temp={Math.round(Weather.main.temp)}
             description={Weather.weather[0].description} />}
            
        </React.Fragment>
    )



}

export default Search;
