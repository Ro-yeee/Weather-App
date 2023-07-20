import { useState } from 'react';
import './App.css';
import TopCard from './TopCard';
import BottomCard from './BottomCard';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const api = {
    key : "be8e67b55b77481f9ab101100231707",
    baseUrl: "http://api.weatherapi.com/v1/current.json"
  }
  const [location,setLocation] = useState("")
  const [weather,setWeather] = useState(null)
  const [unit,setUnit] = useState("°C")

  const toggleUnit = () =>{
    if(unit === "°C") setUnit("°F")
    else setUnit("°C")
    console.log(unit)
  }

  const getTime = (data) =>{
    const time = data.split(" ")[1].split(":")[0]
    if(time==="5"||time==="6"||time==="7"||time==="8"||time==="9"||time==="10"||time==="11"||time==="12") return "Morning"
    else if(time==="13"||time==="14"||time==="15"||time==="16"||time==="17"||time==="18"||time==="19") return "Evening"
    else return "Night"
  }

  const requiredData = (data) =>{
    setWeather({name : data.location.name,
                country : data.location.country,
                condition : data.current.condition.text,
                tempC : data.current.temp_c,
                tempF : data.current.temp_f,
                wind : data.current.wind_kph,
                humidity : data.current.humidity,
                feelsC : data.current.feelslike_c,
                feelsF : data.current.feelslike_f,
                time : getTime(data.location.localtime),
                icon : data.current.condition.icon
    })
  }
  const search = (e) =>{
      if(e.key !== "Enter") return
      fetch(`${api.baseUrl}?Key=${api.key}&q=${location}`,{mode:"cors"})
      .then(res => res.json())
      .then(result => {
        requiredData(result) 
        setLocation("")})
      .catch(rej => alert("Location not found.Search must be in the form of [City], [City, State] or [City, Country]."))
  }
  window.onload = async () =>{
    try{
        const fetched = await fetch(`${api.baseUrl}?Key=${api.key}&q=kochi`,{mode:"cors"})
        const res = await fetched.json()
        requiredData(res)
    }catch(err){
      alert("Location not found.Search must be in the form of [City], [City, State] or [City, Country].")
    }   
  }
  return (
    <div className="MainContainer">
      <div className='searchBoxContainer'>
        <input value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={search} type="text" placeholder='Search Location...' className='search'/>
        <ToggleSwitch toggleUnit={toggleUnit} />
      </div>
      <TopCard weather={weather} unit={unit} />
      <BottomCard weather={weather} unit={unit} />
    </div>
    
  );
}

export default App;
