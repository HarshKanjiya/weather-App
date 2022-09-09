import './App.css';
import Details from './component/wether-details/wether-details.component';
import WeatherSearch from './component/wether-search/wether-search.component';
import { useContext } from 'react';
import { dataContext } from './context/context';
function App() {
  const {weatherData} = useContext(dataContext);
  
  if(weatherData){
    const weather = weatherData.current.condition.text;

  }

  return (
    <div className='main-box'>

      <div className="App">
        <Details/>
        <WeatherSearch/>
      </div>
    </div>
  );
}

export default App;
