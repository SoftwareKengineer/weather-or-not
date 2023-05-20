import React from 'react'

function topbuttons({setQuery}) {

    const cities = [
        
    {

        id:1,
        title: 'london'

    },
    {

        id:2,
        title: 'cancun'

    },
    {

        id:3,
        title: 'sydney'

    },
    {

        id:4,
        title: 'tokyo'

    },
    {

        id:5,
        title: 'atlanta'

    },
    {

        id:5,
        title: 'houston'

    },
]

return <div className= "flex items-center justify-around my-6">
    {/* ADDING ONCLICK */}
    {cities.map(city) => (<button key={city.id} className=" text-white text-lg font-medium"onClick={() => setQuery ({ q: city.title})}>{city.title}</button>)
    </div>
    }
export default topbuttons;

