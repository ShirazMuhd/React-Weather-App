import React from "react";
import "./weatherCard.css";

function WeatherCard(props) {
  return (
    <div className="weatherCard-container">
      <div className="weatherCard">
        <div className="country">
          <h3>
            <span>{props.name}</span>
            <sup>{props.country}</sup>
          </h3>
        </div>
        <div className="temp">
          <div className="content">
          <h1>
            {props.temp}&deg;
            <sup>C</sup>
          </h1>
          </div>
          <img src={props.img} alt="" />
        </div>
        <div className="description">
        
          <h4>{props.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
