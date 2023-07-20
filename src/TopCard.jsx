import React from 'react'

function TopCard({weather,error,unit}) {
  if(weather === null) return " "
  else
  return (
    <div className='weatherBox'>
        <h1 className='temperature' datatemp={unit} >{unit === "°C" ? Math.round(weather.tempC) : Math.round(weather.tempF) }</h1>
        <div className='generalInfo'>
            <h1 className='condition'>{weather.condition}</h1>
            <h1 className='location'>{weather.name}</h1>
            <h1 className='country'>{weather.country}</h1>
        </div>
    </div>
  )
}

export default TopCard
