import React, {useEffect, useState} from "react";
import axios from "axios";
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecast from "../components/WeatherForecast";

const WeatherApi = () => {

    const [weather, setWeather] = useState(null);

    const apiKey = "ac7fcd8f0128428bae1233320212304";

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=48207&days=10&aqi=no&alerts=no`);
            setWeather(request.data);
            console.log(request.data);
            return request;
        }
        fetchData();

    }, []);

    
    var searchWeather = (word) => {
        axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${word}&days=10&aqi=no&alerts=no`)
        .then((data) => {
            console.log("success");
            setWeather(data.data);
        }).catch(() => {
            console.log("Please Check the input parameters")
        })
    }

    return(
        <div>
            <div className="bg">

                {/* Passing Props to the Children Components */}
                {weather && <CurrentWeather weatherData = {weather} searchWeather = {word => searchWeather(word)}/>}
                {weather && <WeatherForecast weatherData = {weather}/>}

            </div>
        </div>
    );
    
}

export default WeatherApi;