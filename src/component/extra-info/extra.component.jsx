import './extra.styles.css';
import { useContext } from 'react';
import {dataContext } from '../../context/context';

const ExtraInfo = () => {
    const { weatherData } = useContext(dataContext);


       return ( 
        <div className='extra-info-box'>

        {
            weatherData &&

            <div className="extra-info-box-time">
        <span className='city-span-element'> City : &nbsp;</span>
        {weatherData ?<span>{weatherData.location.name} /&nbsp;</span>  : null} 
            {weatherData ?<span>{weatherData.location.region} /</span>  : null}
            {weatherData ?<span>&nbsp;{weatherData.location.country}</span>  : null}  
            <br/>
            <span className='time-span-element'> Time : &nbsp;</span>
            <span>{ weatherData ? weatherData.location.localtime : null }</span>
            <br/>
            <span className='extra-info-box-span-bottom'>Time zone : &nbsp;</span>
            <span>{ weatherData ? weatherData.location.tz_id : null }</span>
        </div>
    }
        </div>
        
     );
}
 
export default ExtraInfo;   