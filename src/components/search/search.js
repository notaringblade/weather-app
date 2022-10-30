import React, {useState, useEffect, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownLocations from "../DropDown/dropdown";
import './search.css';
import Weather from "../weather";
import { HistoryContext } from "../history/historyContext";
import format from "date-fns/format";

export default function Search() {

    const weather_api = {
        key: '14c797fa7a5723fa09bc28e5d0b440a4',
        base: "http://api.openweathermap.org/data/2.5/"
      }
    
      const [searchValue, setSearchValue] = useState('');
      const [initValue, setinitValue] = useState('Goa')
      const [value, setValue] = useState('');
      const [weather, setWeather] = useState({});
      const [historyValue, setHistoryValue] = useState('');

      const History = useContext(HistoryContext);

      
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
      

      function addToHistory()  {
        console.log(historyValue);
        const newHistory = {
          location: historyValue,
          searchedTime: format(new Date(), 'Pp' ),
          storedWeather: {weather}
          
          // tempratureHistory: weather.main.temp,
          // accurateLocation: weather.sys.country
          
        } 

        console.log(historyValue);
        History.setHistory([newHistory, ...History.history]);
        
      }

      
    
      const search = evt => {
        if(evt.key === "Enter"){
          fetch(`${weather_api.base}weather?q=${searchValue}&units=metric&APPID=${weather_api.key}`)
            .then(res => res.json())
            .then(result => {
              
              console.log(searchValue);
              console.log(historyValue);
              setWeather(result);
              setHistoryValue(searchValue);
              setSearchValue('');


            });
        }
      }
      
      useEffect(() => {
        fetch(`${weather_api.base}weather?q=${initValue}&units=metric&APPID=${weather_api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setSearchValue('');
            });
      }, [initValue])
      

      useEffect(() => {
        if(typeof weather.main !== 'undefined' ){
          console.log(historyValue)
          addToHistory();
          setSearchValue('');
          console.log(History.history)
        }else{
          console.log("Undefined")
        }
      }, [historyValue])
      
    
      const dropDown = () =>{
        fetch(`${weather_api.base}weather?q=${value}&units=metric&APPID=${weather_api.key}`)
            .then(res => res.json())
            .then(result => {
              setSearchValue('');
              setWeather(result);
              console.log(result);
              setHistoryValue(value);
            });
      }
      
    
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
  
        
          <DropdownLocations weather={weather} dropDown={dropDown} setValue={setValue} value={value} setHistoryValue={setHistoryValue}/>
  
          <Weather historyValue={historyValue} weather = {weather} formatDate={formatDate}/>
        
        </div>
        

      </div>
    );
  
}
