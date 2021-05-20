import React,{useState} from 'react';
import './search.css';
import fetchWeather from '../axios/fetchApi'


function Search() {
    const [query, setQuery] = useState('')
    const [Weather, setWeather] = useState({})

    const search = (e)=>{
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
                 onChange={(e)=> setQuery(e.target.value)} />

                <button type="submit" onClick={search}><i class="fas fa-search"></i></button>
            </div>
        </React.Fragment>
    )
}

export default Search;
