import React from 'react';

const api = {
  key: "a15127ab2bf64302945a819af90c8536",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder = "search here" 
          />
          <div className="location-box">
            <div className="location">Sherpur, Mymensinghh</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
