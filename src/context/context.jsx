import { createContext, useState } from "react";

export const dataContext = createContext({
    weatherData:[],
    setWeatherData: () => {}
})


export const ContextProvider = ({children}) => {
    const [weatherData, setWeatherData ] = useState();

    const value = {weatherData , setWeatherData}
    return(<dataContext.Provider value={value}>{children}</dataContext.Provider>)
}