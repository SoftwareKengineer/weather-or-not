import { DateTime } from "luxon";
const api_key = "35cdcdc8ec84c26675897031c0f592bd";
const base_url = "https://api.openweathermap.org/data/2.5/"


// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&excludecurrent,minutely,hourly,alerts&appid=35cdcdc8ec84c26675897031c0f592bd&units=metric

const getWeatherData = {infoType, searchParams}; => {const url = new URL (base_url + "/" + "infoType"); url.search = new URLSearchParams({...searchParams, appid:api_key});

return fetch(url).then((res) => res.json())};


const formattedcurrentweather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        wind: {speed}
    } = data

const {main: details, icon} = weather[0]

    // time to destructure
return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, details, icon}

}

const formatForecastWeather = (data) => {
    let{ timezone, daily, hourly} = data;
    // slice slice baby with some mappage
    daily = daily.slice(1,6).map()

}

const getformattedweatherdata = async (searchParams) => 
    {const formattedcurrentweather = await getweatherdata
    ('weather', searchParams).then(formattedcurrentweather)

const{lat, lon} = formattedcurrentweather;

    const formattedforecastweather = await getWeatherData ( "onecall", {lat,lon,exclude: "current,minutely,alerts",units: searchParams.units,}).then(formatForecastWeather)

    return formattedcurrentweather;
};

const formatToLocalTime = (secs, zone, format, = "cccc, dd LLL YYYY' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={api_key}
