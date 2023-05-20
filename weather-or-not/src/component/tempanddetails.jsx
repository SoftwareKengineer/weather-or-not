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


function tempanddetails(
{weather: {
  details, icon, temp, temp_min, temp_max, sunrise, sunset,
  speed, humidity, feels_like, timezone
}}


) {
  return (
   <>
   <div>
        <div className="flex items-center justify-center py-6
        text-xl text-cyan-300">
        <p>{details}</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3"/>
            <img src={iconurlfromcode(icon)}
            alt=""className="w-20"/>
    <p className= "text-5xl">{'$(temp.toFixed()}°'}</p>

    <div className="flex flex-col space-y-2"/>
      
      
        <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className= {mr-1} />
               Real fell:
               <span className="font-medium ml-1">{'${feels_like.tofixed()}°'}</span>
               </div>
            
               <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className= {mr-1} />
               humidity:
               <span className="font-medium ml-1">{'${humidity.tofixed()}%'}</span>
               </div>

               <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className= {mr-1} />
               windspeed:
               <span className="font-medium ml-1">{'${speed.tofixed()}mph'}</span>
               </div>

            </div>
        </div>
        </>

    <div className= "flex flex-row items-center justify-center
    space-x-2 text-white text-sm py-3"></div>
<UilSun />
<p "font-light"> Rise: <span>{formattolocaltime(sunrise, timezone,  "hh:mm a")}</span></p>
<p className="font-light"></p>

<UilSunset />
<p "font-light"> Set: <span>{formattolocaltime(sunset, timezone,  "hh:mm a")</span></p>
<p className="font-light"></p>

<UilSun />
<p "font-light"> <High></High>: <span>{'${temp_max.toFixed}°</span></p>
<p className="font-light"></p>

<UilSun />
<p "font-light"> Low: <span>${temp_min.toFixed}°</span></p>
<p className="font-light"></p>

  )
}

export default tempanddetails