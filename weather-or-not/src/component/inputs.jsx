import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs= ({ setQuery, units, setUnits }) =>{
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
const testFunc = (e) => {
  if(e.key === 'Enter' && city !== ""){
    console.log(e)
    handleSearchClick()
  }
}

  const handleSearchClick = () => {
    
    if (city !== "" ) {

      setQuery({ q: city })}
      ;
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const query = { lat, lon };
      if (!query.lat || !query.lon) return; // Handle case where lat or lon is undefined
      setQuery(query);
    });
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          // this is for the search bar
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={testFunc}
          placeholder="Search..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        {/* changes up the cursor when clicking on the icon */}
        <UilSearch
        //  Searchicon
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
        // location icon
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />

        {/* this is for the calling of Fahrenheit or celcius from api and making it a click button */}
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1"> | </p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
