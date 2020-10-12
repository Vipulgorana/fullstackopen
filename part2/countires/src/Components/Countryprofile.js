import React, { useEffect, useState } from 'react';
import axios from "axios"

const CountryProfile = ({country}) =>{


  const [weather,SetWeather] = useState({
    temperature:"NA",
    feelslike:"NA",
    weather_icons:"NA",
  });

  const accessKey = "e1880ae6ee7fe2cd30ac381d400be25d";

  console.log(accessKey);

  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${country.capital}`)
      .then((response)=>{
        SetWeather(response.data.current);
      })
      .catch((err)=>{
        console.log("error",err)
      })
  },[])

  return(<>
    <h2>{country.name}</h2>
    <img src={country.flag} alt="flag" />
    <p> Capital:{country.capital}</p>
    <p> Population:{country.population}</p>
    <h3>Languages</h3>
    <ul>
    {country.languages.map((lang)=>{return(<li key={lang.name}>{lang.name}</li>)})}
    </ul>
    <h2>Weather:</h2>
  <p>temperature:{weather.temperature}</p>
  <p>Feels Like:{weather.feelslike}</p>
  <img src={weather.weather_icons} alt="icon" />
    </>
  )

}

export default CountryProfile