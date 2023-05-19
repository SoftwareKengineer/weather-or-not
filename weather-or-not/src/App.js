
import './App.css';
import uilReact from "@iconscout/react-unicons/icons/uil-react";
import topbuttons from "./component/topbuttons";
import inputs from './component/inputs';

function App() {
  return (
  <>
  <div className="mx-auto mx-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
shadow-gray-400">
 <topbuttons />
 < inputs />

 <timeandlocation />
 </div>
 <input/>

  );
}

export default App;
