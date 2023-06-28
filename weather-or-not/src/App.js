
import React, { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./component/services/WeatherService";
import Inputs from "./component/inputs";
import TopButtons from "./component/topbuttons";
import TimeAndLocation from "./component/timeandlocation";
import TempAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/forecast";
// import "./App.css";
// import { UilReact } from "@iconscout/react-unicons";


function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  // MAKES BACKGROUND CHANGE COLOR BASED ON THE TEMP
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric 20 : 65";
    if (weather.temp <= threshold) return "from-cyan-700-to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  const fetchweather = async () => {
    const data = await getFormattedWeatherData({ q: "atlanta" });
    console.log(data);
  };

  fetchweather();

  return (
    <div
      className={`mx-auto mx-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
shadow-gray-400 ${formatBackground()}`}
    >
      <div>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
        ;
      </div>
    </div>
  );
}
export default App;

/* WHEN TYPING DIV / COMING BEFORE DIV IS DIFFERENT FROM / COMING AFTER DIV ECT.... </DIV> <DIV/> */
