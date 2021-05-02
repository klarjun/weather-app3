import React, {useState} from "react";

const CurrentWeather = (props) => {

    const currentTemp = props.weatherData.current.temp_c;

    const maxTemp =  props.weatherData.forecast.forecastday['0'].day.maxtemp_c;

    const minTemp =  props.weatherData.forecast.forecastday['0'].day.mintemp_c;

    const condition = props.weatherData.forecast.forecastday['0'].day.condition.text;

    const icon = props.weatherData.forecast.forecastday['0'].day.condition.icon;

    const sunrise = props.weatherData.forecast.forecastday['0'].astro.sunrise;

    const sunset = props.weatherData.forecast.forecastday['0'].astro.sunset;

    //const date = props.weatherData.forecast.forecastday['0'].date;

    const location = props.weatherData.location.name;

    const country = props.weatherData.location.country;
    
    const [input, setInput] = useState("48207");
    const cityInput = (e) => {
        setInput(e.target.value);
    }
    
    return(
        <div className="CurrentWeather">
            
            {/* Main Widget Displaying Today's Weather */}    
            <div className="container">
                <div className="widget" onClick={() => props.searchWeather(input)}>
                    
                    {/* Search Tool */}    
                    <div className="search1">
                        <div className="flexbox">
                            <div className="search">
                                <div className="inp">
                                    <input onChange= {cityInput} onClick={() => props.searchWeather(input)} type="text" placeholder="Zip Code or City" required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Half displaying Today's Weather Condition */}
                    <div className="left">
                        <img src={icon} className="icon" alt=""/>
                        <h3 className="weather-status"> {condition} </h3>
                    </div>

                    {/* Right Half displaying Location and Country */}
                    <div className="right">
                        <h5 className="city">{location}, {country} </h5>
                        <h5 className="degree">{currentTemp}&#176;c</h5>
                    </div>

                    {/* Bottom Half displaying Other Weather Details */}
                    <div className="bottom">
                        <div>
                            <span>Max temp</span>
                            <span> {maxTemp}&#176;c </span>
                        </div>
                        <div>
                            <span>Min temp</span>
                            <span> {minTemp}&#176;c </span> 
                        </div>
                        <div>
                            <span>Sunrise:</span>
                            <span> {sunrise} </span>
                        </div>
                        <div>
                            <span>Sunset:</span>
                            <span> {sunset}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;