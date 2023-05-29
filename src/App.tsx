import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {

  const [weather, setWeather] = React.useState("");
  const [location,setLocation] = React.useState("");

  React.useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=42.9832406&lon=-81.243372&appid=fe4feefa8543e06d4f3c66d92c61b69c").then((response) => {
      console.log(response.data);
      console.log(response.data.weather[0].description);
      setWeather(response.data.weather[0].description)
      setLocation(response.data.name)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        The forecast for the weather in {location} for today is:
       {weather} 
       
      </header>
    </div>
  );
}

export default App;
