import React from 'react';

const api = {
  key: "a15127ab2bf64302945a819af90c8536",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder = "search here" 
          />
          
        </div>
      </main>
    </div>
  );
}

export default App;
