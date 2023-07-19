import { useState } from 'react';
import './App.css';
import TopCard from './TopCard';
import BottomCard from './BottomCard';

function App() {
  const api = {
    key : "be8e67b55b77481f9ab101100231707",
    baseUrl: "http://api.weatherapi.com/v1/current.json"
  }
  const [location,setLocation] = useState("")
  const [weather,setWeather] = useState(null)

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
    })
  }
  const search = (e) =>{
      if(e.key !== "Enter") return
      fetch(`${api.baseUrl}?Key=${api.key}&q=${location}`,{mode:"cors"})
      .then(res => res.json())
      .then(result => requiredData(result))
      .catch(error => console.log(error))
      setLocation("")
  }
  window.onload = async () =>{
    try{
        const fetched = await fetch(`${api.baseUrl}?Key=${api.key}&q=kochi`,{mode:"cors"})
        const res = await fetched.json()
        requiredData(res)
    }catch(error){
      console.log(error)
    }   
    setLocation("")
  }
  return (
    <div className="MainContainer">
      <div className='searchBox'>
        <input value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={search} type="text" placeholder='Search Location...' className='search'/>
      </div>
      <TopCard weather={weather}/>
      <BottomCard weather={weather} />
    </div>
    
  );
}

export default App;
