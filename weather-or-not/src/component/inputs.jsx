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
    <UilSearch size={25} className="/>
    <UilLocationPoint size={25}/>


    </div>
     </div>
  );
}

export default inputs