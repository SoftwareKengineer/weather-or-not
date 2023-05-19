import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'


function inputs() {
  return (<div> className="flex flex-row justify-center my-6"
    
    <div> className=flex w-3/4 items-center justify-center space-x-4">

        <input type="text"
        // this is for the search bar
        placeholder="Search for city..."
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"

    />
    {/* changes up the cursor when clicking on the icon */}
    <UilSearch 
    size={25} 
    className=" text-white cursor-pointer transition ease-out hover:scale-125"
    />
    <UilLocationPoint
    size={25}
    className=" text-white cursor-pointer transition ease-out hover:scale-125"
    />

{/* this is for the calling of Fahrenheit or celcius from api and making it a click button */}
    </div>

    </div className="flex flex-row w-1/4 items-center justify-center">
        <button
            name="metric"
            className="text-xl text-white font-light"
            >°C</button>
            <p className="text-white mx-1"> </p>
            <button
            name="imperial"
            className="text-xl text-white font-light"
            ></button>
            <div/>
        </div>
    );
}

export default inputs