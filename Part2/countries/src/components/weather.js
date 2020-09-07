import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=" + process.env.REACT_APP_API_KEY + "&query=" + capital
      )
      .then((response) => {
        setWeather(response.data);
        console.log(process.env.REACT_APP_API_KEY);
      });
  }, [capital]);

  if(weather === undefined){
      return(
          <div></div>
      )
  }
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <b>temperature</b>
        {weather.current.temperature} Celcius
      </p>
      <img src={weather.current.weather_icons[0]} alt="weather icon"/>
      <p><b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
  );
};

export default Weather;
