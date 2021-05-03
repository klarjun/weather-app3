import React from "react";


const WeatherForecast = (props) => {

    const rainChancesDay1 = props.weatherData.forecast.forecastday['1'].day.daily_will_it_rain;
    const rainChancesDay2 = props.weatherData.forecast.forecastday['2'].day.daily_will_it_rain;

    const maxTempDay1 =  props.weatherData.forecast.forecastday['1'].day.maxtemp_c;
    const maxTempDay2 =  props.weatherData.forecast.forecastday['2'].day.maxtemp_c;

    const minTempDay1 =  props.weatherData.forecast.forecastday['1'].day.mintemp_c;
    const minTempDay2 =  props.weatherData.forecast.forecastday['2'].day.mintemp_c;

    const conditionDay1 = props.weatherData.forecast.forecastday['1'].day.condition.text;
    const conditionDay2 = props.weatherData.forecast.forecastday['2'].day.condition.text;

    const iconDay1 = props.weatherData.forecast.forecastday['1'].day.condition.icon;
    const iconDay2 = props.weatherData.forecast.forecastday['2'].day.condition.icon;

    const sunriseDay1 = props.weatherData.forecast.forecastday['1'].astro.sunrise;
    const sunriseDay2 = props.weatherData.forecast.forecastday['2'].astro.sunrise;

    const sunsetDay1 = props.weatherData.forecast.forecastday['1'].astro.sunset;
    const sunsetDay2 = props.weatherData.forecast.forecastday['2'].astro.sunset;

    const dateDay1 = props.weatherData.forecast.forecastday['1'].date;
    const dateDay2 = props.weatherData.forecast.forecastday['2'].date;

    //Functions to determine the possibility of rain
    function willItRainDay1(){
        if(rainChancesDay1 === 1 ){
            return "Yes";
        }else{
            return "No";
        }
    }

    function willItRainDay2(){
        if(rainChancesDay2 === 1 ){
            return "Yes";
        }else{
            return "No";
        }
    }

    return(
        <div className="WeatherForecast">

            {/* Sub Widget - 1 Displaying Today's Weather */}   
            <div className="sub-container-1">
                <div className="sub-widget-1">

                    <div className="center">
                        <h5 className="city">{dateDay1}</h5>
                    </div>

                    {/* Left Half displaying Today's Weather Condition */}
                    <div className="left">
                        <img src={iconDay1} className="icon" alt=""/>
                        <h5 className="weather-status">{conditionDay1}</h5>
                    </div>

                    {/* Right Half displaying Sunrise and Sunset */}
                    <div className="right">
                        <h5 className="city"> <span>Sunrise: </span>{sunriseDay1}</h5>
                        <h5 className="city"> <span>Sunset: </span>{sunsetDay1}</h5>
                    </div>

                    {/* Bottom Half displaying Other Weather Details */}
                    <div className="bottom">
                        <div>
                            <span>Max temp</span>
                            <span> {maxTempDay1}&#176;c </span>
                        </div>
                        <div>
                            <span>Min temp</span>
                            <span> {minTempDay1}&#176;c </span> 
                        </div>
                        <div>
                            Does it rain today? <span>{willItRainDay1()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub Widget - 2 Displaying Today's Weather */}   
            <div className="sub-container-2">
                <div className="sub-widget-2">

                    <div className="center">
                        <h5 className="city">{dateDay2}</h5>
                    </div>

                    {/* Left Half displaying Today's Weather Condition */}
                    <div className="left">
                        <img src={iconDay2} className="icon" alt=""/>
                        <h5 className="weather-status">{conditionDay2}</h5>
                    </div>

                    {/* Right Half displaying Sunrise and Sunset */}
                    <div className="right">
                        <h5 className="city"> <span>Sunrise: </span>{sunriseDay2}</h5>
                        <h5 className="city"> <span>Sunset: </span>{sunsetDay2}</h5>
                    </div>

                    {/* Bottom Half displaying Other Weather Details */}
                    <div className="bottom">
                        <div>
                            <span>Max temp</span>
                            <span> {maxTempDay2}&#176;c </span>
                        </div>
                        <div>
                            <span>Min temp</span>
                            <span> {minTempDay2}&#176;c</span> 
                        </div>
                        <div>
                            Does it rain today? <span>{willItRainDay2()}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeatherForecast;