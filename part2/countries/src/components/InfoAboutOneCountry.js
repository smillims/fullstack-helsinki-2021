import { useEffect, useState } from "react";

function InfoAboutOneCountry({ oneCountryData }) {
  const [weatherInfo, setWeatherInfo] = useState({});
  const { name, languages, capital, population, flag } = oneCountryData;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data));
  }, [name]);

  const styleImg = {
    minWidth: `100%`,
    maxWidth: `100%`,
  };

  if (Object.keys(weatherInfo).length !== 0) {
    const {main, wind} = weatherInfo;
    const icon = weatherInfo.weather.map((item) => item.icon);

    return (
      <div key={name}>
        <h2>{name}</h2>
        <p>capital is {capital}</p>
        <p>population is {population}</p>
        <div>
          <h3>Language</h3>
          <ul>
            {languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
        </div>
        <div style={{ maxWidth: 300 }}>
          <img src={flag} alt="flag" style={styleImg} />
        </div>
        <h2>Weather in {name}</h2>
        <p>
          <b>temperature: </b>
          {main.temp} °C
        </p>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon of current weather" />
        <p><b>speed:</b> {wind.speed}</p>
      </div>
    );
  }

  return null;
}

export default InfoAboutOneCountry;
