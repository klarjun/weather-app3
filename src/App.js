import React from "react";
import './styles/styles.css';

import WeahterApi from "./api/WeatherApi"



function App() {

  return (
    <div className="App">
        <h1>Vishnu Shastranama</h1>
           <WeahterApi />
    </div>
    
  );
}

export default App;
