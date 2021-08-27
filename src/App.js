import React, { useState } from 'react';

const api = {
  key: "a15127ab2bf64302945a819af90c8536",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
         setWeather(result);
         setQuery('');
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

  }

  return (
    <div className="App">
      <main>

        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder = "search here"
            onChange = {e => setQuery(e.target.value)}
            value = {query}
            onKeyPress = {search} 
          />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>

              <div className="weather-box">
                <div className="temperature">
                  25°C
                </div>
                <div className="weather">Sunny</div>
              </div>
          </div>

          ) : ('')}

      </main>
    </div>
  );
}

export default App;
