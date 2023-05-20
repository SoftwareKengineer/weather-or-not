// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String
const api_key = "35cdcdc8ec84c26675897031c0f592bd";
const base_url = "https://api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}"

// Did you see this ????

const getWeatherData = {infoType, searchParams} => {
    const url = new URL (base_url + "/" + "infoType") ;
    url.search = new URLSearchParams({...searchParams, appid:
    api_key});

return fetch(url)
        .then(((res) => res.json())

}

const getformattedweatherdata = (searchParams) => {
    const formattedcurrentweather = await getweatherdata
}

api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={api_key}
