import React, { useContext } from 'react'
import { HistoryContext } from './historyContext';
import './index.css';
import { Button } from 'reactstrap';


export default function History() {

  const History = useContext(HistoryContext);

  const listItems = History.history.map((locations) =>  
  // {const backgroundColor = locations.storedWeather.main.temp > 20? "white": "blue"}

  <div className={(typeof locations.storedWeather.weather.main !== 'undefined')? ((locations.storedWeather.weather.main.temp > 20)? 'historyMain hot': 'historyMain'): 'historyMain'}>

    {( locations.location !== ''? 
    (
      <div className='history-items'>
        Searched Value: {(locations.location)}

        <h4>
          {locations.storedWeather.weather.name}, {locations.storedWeather.weather.sys.country}
        </h4>
        <div>
          {Math.round(locations.storedWeather.weather.main.temp)} °C
        </div>
        
        <div>
            {locations.storedWeather.weather.weather[0].main}, {locations.storedWeather.weather.weather[0].description}
        </div>
        <div>
          Recorded at: {locations.searchedTime} (IST)
        </div>

      </div>
    ): (null)
    
    )}
    
    </div>
    );

  return (
    <div className='main-history'>
      {listItems}
      {/* hello */}
    </div>
  )
}
