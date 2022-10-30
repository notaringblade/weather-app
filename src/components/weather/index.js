import React from 'react'

export default function Weather({historyValue, weather, formatDate}) {
  return (
    <div>
        {(typeof weather.main !== 'undefined'? (
          <div className="weather-display">
          <div>
            {weather.name}, {weather.sys.country}
          </div>
  
          <div>
            {Math.round(weather.main.temp)} °C
          </div>
  
          <div>
            <p>{formatDate(new Date())}</p>
          </div>
  
          <div>
            {weather.weather[0].main}, {weather.weather[0].description}
          </div>


        </div>
        ): ( <div> Not a valid location. Please try again</div> ))}
    </div>
  )
}
