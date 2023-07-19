import { useState } from 'react';
import './App.css';

function App() {
  const api = {
    key : "be8e67b55b77481f9ab101100231707",
    baseUrl: "http://api.weatherapi.com/v1/current.json"
  }
  const [location,setLocation] = useState("")
  const [weather,setWeather] = useState({})

  const requiredData = (data) =>{
    setWeather({name : data.location.name,
                country : data.location.country,
                condition : data.current.condition.text,
                tempC : data.current.temp_c,
                tempF : data.current.temp_f,
                wind : data.current.wind_mph,
                humidity : data.current.humidity,
                fellsC : data.current.feelslike_c,
                feelsF : data.current.feelslike_f
    })
  }
  const search = (e) =>{
      if(e.key !== "Enter") return
      fetch(`${api.baseUrl}?Key=${api.key}&q=${location}&aqi=yes`,{mode:"cors"})
      .then(res => res.json())
      .then(result => requiredData(result))
      .catch(error => console.log(error))
      setLocation("")
  }
  return (
    <div className="App">
      <input value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={search} type="text" placeholder='Search Location...'/>
    </div>
  );
}

export default App;
