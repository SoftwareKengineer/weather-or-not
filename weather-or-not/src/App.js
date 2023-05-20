
import './App.css';
import uilReact from "@iconscout/react-unicons/icons/uil-react";
import topbuttons from "./component/topbuttons";
import inputs from './component/inputs';
import timeaslocation from "..components/timeandlocation";
import tempanddetails from "./components/tempanddetails";
import forecast from "./components/forecast";
import getformattedweatherdata from "./services/weatherservice"
import { useEffect, useState } from "react";


function App() {
  // usestatehook
  // fetches new data everytime we make a new search
  const [query, setQuery] = useState ({q: 'berlin'})
  const [units, setUnits] = useState ('metric')
  const [weather, setWeather] = useState(null)

useEffect(() => {
const fetchWeather = async () => {
  await getformattedweatherdata({...query, units}).then((data) => {setWeather(data);})
}
};
fetchWeather();
}, ([query,units]);
// MAKES BACKGROUND CHANGE COLOR BASED ON THE TEMP
const formatBackground = () => {if (!weather) return'from-cyan-700 to-blue-700'
const threshold= units === 'metric 20 : 65
if (weather.temp <= threshold) return 'from-cyan-700-to-blue-700'
return 'from-yellow-700 to-orange-700'
}

);
}, [])

  const fetchweather = async () =>{const data = await getformattedweatherdata( { q: "atlanta" });console.log(data);}

fetchweather();


  return (
  <>
  <div className={'mx-auto mx-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
shadow-gray-400 ${formatBackground()}'}
>
<topbuttons setQuery={setQuery} />
< inputs setQuery= {setQuery} units= {units} setUnits= {setUnits}/>
{ weather && (
  <div>
<timeandlocation weather={weather} />
<tempanddetails weather={weather} />

<forecast title="hourly forecast" items={weather.hourly}/>
<forecast title="daily forecast" items={weather.daily}/>
</div>
)};
</div>
  );
}

export default App;



{/* WHEN TYPING DIV / COMING BEFORE DIV IS DIFFERENT FROM / COMING AFTER DIV ECT.... </DIV> <DIV/> */}