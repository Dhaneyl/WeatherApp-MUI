import axios from "axios";
import React, { useState } from "react";
import { weatherContext } from "./WeatherContext";

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [notResult, setnotResult] = useState();

  const dataSearch = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };
  //Consulting an API

  const consultWeather = async (datas) => {
    try {
      setLoading(true);
      setnotResult(false);
      const { city, country } = datas;
      const appId = import.meta.env.VITE_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},
          ${country}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      console.log(data[0]);
      const { lat, lon } = data[0];

      const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: weather } = await axios(urlWeather); //data : weather, this is renaming data to weather
      setResult(weather);
    } catch (err) {
      setnotResult(
        "We couldn't find the location's weather you input, try with another!"
      );
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <weatherContext.Provider
      value={{
        search,
        dataSearch,
        consultWeather,
        result,
        loading,
        notResult
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
