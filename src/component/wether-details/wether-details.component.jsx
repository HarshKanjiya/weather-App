import './wether-details.styles.css';
import { dataContext } from '../../context/context';
import { useContext } from 'react';
const Details = () => {
    const {weatherData} = useContext(dataContext);

    const daytimechecker = () => {            
        if (weatherData){
            if(weatherData.current.is_day == 1)
            return(
                <span>it's Day time</span>
            )
            else{
                return(
                    <span>it's Night time</span>
                )
            }
        }
        
        
    }


    return ( 
        <div className='details-box'>
            <div className="details-box-heading">
                {weatherData ? <span className='details-box-heading-city'>{ weatherData.location.name }</span> : null}
                <h1 className='temp-deg'>{weatherData ? <span>{weatherData.current.temp_c}</span> : null}</h1>
                {weatherData ? <span className='details-box-heading-o'>o</span> : null}
                <span className='details-box-day-night-time'>
                    {daytimechecker()}
                </span>
                <span>{weatherData ? <span className='details-box-weather'>Weather : {weatherData.current.condition.text}</span> : null}</span>
                
            </div>
            {weatherData ? <span className='details-box-humidity'>Humidity : {weatherData.current.humidity}</span> : null}
            <br/>
            {weatherData ? <span className='details-box-humidity'>Wind : {weatherData.current.wind_kph} KPH</span> : null}



        </div>
     );
}
 
export default Details;



// <h2>{weatherData ? <span>{weatherData.current.}</span> : null}</h2>