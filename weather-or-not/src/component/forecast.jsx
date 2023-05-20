import React from 'react'

function forecast({ title, items}) {
  return (
    </div>
      < className="flex items-center justify-start my-6">
        <p className=" text-white font-medium uppercase">(title)</p>
        </div> 
       <hr className="my-2" />

<div className= "flex flex-row items-center justify-between"
"text-white">
  {items.map(item => (<div className="flex flex-col items-center justify-center">
    <p className="font-light text-sm">{item.title}</p>
    <img 
    scr="{iconurlfromcode(item.icon)}" 
    className="w-12 my-1"
    alt=""/><p className="font-medium">'${item.temp.toFixed()}°</p>)
    )}

<div className="flex flex-col items-center justify-center"><p className="font-light text-sm">04:30am</p><img scr="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/><p className="font-medium">22°</p>

<div className="flex flex-col items-center justify-center"><p className="font-light text-sm">04:30am</p><img scr="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/><p className="font-medium">22°</p>

<div className="flex flex-col items-center justify-center"><p className="font-light text-sm">04:30am</p><img scr="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/><p className="font-medium">22°</p><div className="flex flex-col items-center justify-center"><p className="font-light text-sm">04:30am</p><img scr="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/><p className="font-medium">22°</p></div></div></div>)}export default forecast
</>