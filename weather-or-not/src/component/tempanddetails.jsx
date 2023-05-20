import React from 'react'
import {
UilArrowup,
UilArrowDown,
UilTemperature,
UilTear,
UilWind,
UilSun,
UilSunset,
} from "@iconscout/react-unicons"


function tempanddetails() {
  return (
   <>
   <div>
        <div className="flex items-center justify-center py-6
        text-xl text-cyan-300">
        <p>cloudy</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3"/>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt=""className="w-20"/>
    <p className= "text-5xl"> 34°</p>

    <div className="flex flex-col space-y-2"/>
      
      
        <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className= {mr-1} />
               Real fell:
               <span className="font-medium ml-1">32°</span>
               </div>
            
               <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className= {mr-1} />
               humidity:
               <span className="font-medium ml-1">63%</span>
               </div>

               <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className= {mr-1} />
               windspeed:
               <span className="font-medium ml-1">5mph</span>
               </div>

            </div>
        </div>
        </>

    <div className= "flex flex-row items-center justify-center
    space-x-2 text-white text-sm py-3"></div>
<UilSun />
<p "font-light"> Rise: <span>05:30 pm</span></p>
<p className="font-light"></p>

<UilSunset />
<p "font-light"> Set: <span>06:30 pm</span></p>
<p className="font-light"></p>

<UilSun />
<p "font-light"> <High></High>: <span>70°</span></p>
<p className="font-light"></p>

<UilSun />
<p "font-light"> Low: <span>40°</span></p>
<p className="font-light"></p>

  )
}

export default tempanddetails