import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { CustomButton } from './Components/Header'
import { Div } from './Components/Header'
import { Input } from './Components/Header'
import { Label } from './Components/Header'
import { Body } from './Components/Header'
import { Span } from './Components/Header'
import { WeatherIcon } from './Components/WeatherIcon';
import ico from './sun_icon.jpg'

function App() {

  const [weather, setWeather] = React.useState("");
  const [location, setLocation] = React.useState("lat=48.8588897&lon=2.3200410217200766");

  const [city, setCity] = React.useState("Paris");

  //lat=42.9832406&lon=-81.243372

  // const selectChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => 
  // {
  //   switch (e.currentTarget.value){
  //     case "London":
  //       setLocation("lat=42.9832406&lon=-81.243372")
  //   }
  // }

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value)
    setLocation(value);
    switch (value) {
      case "London":
        setLocation("lat=42.9832406&lon=-81.243372")
        setCity("London")
        break;

      case "Paris":
        setLocation("lat=48.8588897&lon=2.3200410217200766")
        setCity("Paris")
        break;

      case "Sydney":
        setLocation("lat=-33.867926&lon=151.21013810170962")
        setCity("Sydney")
        break;

      case "Tokyo":
        setLocation("lat=35&lon=139")
        setCity("Tokyo")
        break;

      case "Amsterdam":
        setLocation("lat=38&lon=-94")
        setCity("Amsterdam")
        break;



    }
  };

  React.useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?" + location + "&appid=fe4feefa8543e06d4f3c66d92c61b69c").then((response) => {
      console.log(response.data);
      console.log('useeffect')
      //console.log(response.data.weather[0].description);
      setWeather(response.data.weather[0].description)
      //setLocation(response.data.name)
    });
  }, [location]);

  return (
    <Body>
      <Div>
        <Label>City</Label>
        <select onChange={selectChange}>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
          <option value="Sydney">Sydney</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Tokyo">Tokyo</option>
        </select>


        <Div>The forecast for the weather in {city} for today is:
          {weather} </Div>
        <Div>Degrees:</Div>
        <Div>Wind:</Div>
        <img width="200" height="300" src={ico}></img>


      </Div>


    </Body>
  );
}

export default App;
