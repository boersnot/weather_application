import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  React.useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fe4feefa8543e06d4f3c66d92c61b69c").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>
    </div>
  );
}

export default App;
