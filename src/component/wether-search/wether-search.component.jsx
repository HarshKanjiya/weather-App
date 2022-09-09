import { TextField } from "@mui/material";
import { useState, useContext } from "react";
import {  ReactComponent as Search } from '../../res/manage-search.svg';
import ExtraInfo from "../extra-info/extra.component";
import {dataContext } from '../../context/context';
import './wether-search.styles.css';


const WeatherSearch = () => {
    const { weatherData , setWeatherData} = useContext(dataContext);
    const [text,setText ] = useState('surat')  

    const textUpdate = (event) =>{
        setText(event.target.value)
    }



    const fetchData = (inputs) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=30c3b65f0b064163976131121222106 &q=${inputs}&aqi=no`
        fetch(url)
        .then((res) => res.json())
        .then((ans) => setWeatherData(ans))

        console.log(weatherData)
        
    }
    return ( 
        <div className="weather-searchbox-container">

              
    
            <div className="inputs">
                <TextField
                    className="weather-searchbox-text-field"
                    label="Search City"
                    id="outlined-size-small"
                    size="small"
                    onChange={textUpdate}/>
                <button 
                    className="weather-searchbox-button"
                    onClick={fetchData}>
                    <Search className="search-icon"/>
                </button>
            </div>

            <div className="search-extra">
                {weatherData &&
                    <ExtraInfo/>    
                }
            </div>  

            <div className="weather-suggersted-inputs">
                <p 
                className="p-box-inner"
                onClick={()=>fetchData('surat')}
                >Surat</p>
                <p 
                className="p-box-inner"
                onClick={()=>fetchData('delhi')}
                >Delhi</p>
                <p 
                className="p-box-inner"
                onClick={()=>fetchData('new york')}
                >New York</p>
                <p 
                className="p-box-inner"
                onClick={()=>fetchData('toronto')}
                >Toronto</p>
                <p 
                className="p-box-inner"
                onClick={()=>fetchData('peris')}
                >Peris</p>
            </div>

                    

        </div>
     );
}
 
export default WeatherSearch;