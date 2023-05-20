
import './App.css';
import uilReact from "@iconscout/react-unicons/icons/uil-react";
import topbuttons from "./component/topbuttons";
import inputs from './component/inputs';
import timeaslocation from "..components/timeandlocation";
import tempanddetails from "./components/tempanddetails";
import forecast from "./components/forecast";
import getweatherdata from "./services/weatherservice"



function App() {
const fetchweather = async () =>{
  const data = await getformattedweatherdata( { q: "atlanta" });
  console.log(data);
}

fetchweather();


  return (
  <>
  <div className="mx-auto mx-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
shadow-gray-400">
<topbuttons />
< inputs />

<timeandlocation />
<tempanddetails />

<forecast title="hourly forecast"/>
<forecast title="daily forecast"/>
</div>
<input/>
</>
  );
}

export default App;
