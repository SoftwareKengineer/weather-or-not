import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react';


function inputs({setQuery, units, setUnits}) {
    // KEEPS TRACK OF INPUT FIELD
    const [city, setCity] = useState("")
// SAVES US FROM HAVING TO REFETCH DATA
const handleUnitsChange = (e) => {const selectUnit = e.currentTarget.name; if (units !==selectedUnit) setUnits(selectedUnit)}

const handleSearchClick = () => {if (city!== '') setQuery({q: city})}

return (<div> className="flex flex-row justify-center my-6"
    
    <div> className=flex w-3/4 items-center justify-center space-x-4">
value={city}
onChange={(e) => setCity(e.currentTarget.value)}
        <input type="text"
        // this is for the search bar
        placeholder="Enter zipcode..."
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"

    />
    {/* changes up the cursor when clicking on the icon */}
    <UilSearch 
    size={25} 
    className=" text-white cursor-pointer transition ease-out hover:scale-125"
    onClick={handleSearchClick}

    // makes location button click
const handleLocationClick = () => {if (navigator.geolocation.getCurrentPosition(position) =>{let lat = position.coords.latitude let lon = position.coords.longitude})}

setQuery({location, lon })

    />
    <UilLocationPoint
    size={25}
    className=" text-white cursor-pointer transition ease-out hover:scale-125"
    onClick={handleLocationClick}
    />

{/* this is for the calling of Fahrenheit or celcius from api and making it a click button */}
    </div></div className="flex flex-row w-1/4 items-center justify-center">
    <button name="metric"className="text-xl text-white font-light transition ease-out hover:scale-125" onCLick={handleUnitsChange}>°C</button>
    <p className="text-xl text-white mx-1"> | </p>
    <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125" onCLick={handleUnitsChange}>°F</button>
        <div/>
    </div>
    );
}

export default inputs