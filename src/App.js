import React, {useEffect, useState} from "react";
import { flushSync } from "react-dom";

function App() {
  const weather_api = {
    key: '14c797fa7a5723fa09bc28e5d0b440a4',
    base: "http://api.openweathermap.org/data/2.5/"
  }

  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState('')
  const [weather, setWeather] = useState({});

  // useEffect(() => {
  //   console.log(value);
  
    
  // }, [value])
  

  function formatDate(newDate) {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const d = newDate
    const year = d.getFullYear()
    const date = d.getDate()
    // const monthIndex = d.getMonth()
    const monthName = months[d.getMonth()]
    const dayName = days[d.getDay()] // Thu
    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    return formatted.toString()
  }

  

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${weather_api.base}weather?q=${searchValue}&units=metric&APPID=${weather_api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(searchValue);
          setSearchValue('');
          setWeather(result);
          console.log(result);
        });
    }
  }

  const dropDown = () =>{
    fetch(`${weather_api.base}weather?q=${value}&units=metric&APPID=${weather_api.key}`)
        .then(res => res.json())
        .then(result => {
          setSearchValue('');
          setWeather(result);
          console.log(result);
        });
  }

  const numbers = ['goa','London'];
  const listItems = numbers.map((number) =>  <div onClick={()=> { setValue(number)}}>{number}</div>);

  useEffect(() => {
    // console.log(value);
    dropDown();
  }, [value]);
  
  return (
    
    <div className={(typeof weather.main !== 'undefined')? ((weather.main.temp > 20)? 'main hot': 'main'): 'main'}>
      <div className="main-body">

      <div className="search-area">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            onKeyDown={search}
            />
      </div>

      <p>{listItems}</p>

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
      ): ('Enter a Valid Location'))}
      </div>
      
    </div>
  );
}

export default App;
