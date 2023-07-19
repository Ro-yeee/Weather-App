import { useState } from 'react';
import './App.css';

function App() {
  const api = {
    key : "be8e67b55b77481f9ab101100231707",
    baseUrl: "http://api.weatherapi.com/v1/current.json"
  }
  const [location,setLocation] = useState("")
  const [weather,setWeather] = useState({})
  const search = (e) =>{
      if(e.key !== "Enter") return
      fetch(`${api.baseUrl}?Key=${api.key}&q=${location}`,{mode:"cors"})
      .then(res => res.json())
      .then(result => console.log(result))
      setLocation("")
  }
  return (
    <div className="App">
      <input value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={search} type="text" placeholder='Search Location...'/>
    </div>
  );
}

export default App;
