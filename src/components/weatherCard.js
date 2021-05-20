import React from 'react';
import './weatherCard.css'

function WeatherCard(props) {
    return (
        <div className="weatherCard-container">
            <div className="weatherCard">
                <div className="country">
                    <h3><span>Boston</span><sup>am</sup></h3>
                </div>
                <div className="temp">
                    <h1>23&deg;<sup>c</sup></h1>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
