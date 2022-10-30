import React, {useState, createContext, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/index.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from "./components/search/search.js";
import History from "./components/history/index.js";
import {HistoryContext} from "./components/history/historyContext.js";

function App() {
  
  
  const [history, setHistory] = useState([])
  

  
  return (
              <HistoryContext.Provider value={{history, setHistory}}>
    <div>
              <BrowserRouter>
                    <Routes>
                      <Route path='/' element={<Home />}>
                          <Route index element={<Search />} />
                          <Route path='History' element={<History/>} />
                      </Route>
                    </Routes>
              </BrowserRouter>
    </div>
              </HistoryContext.Provider>
  );
}

export default App;
