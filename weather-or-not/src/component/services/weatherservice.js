import { DateTime } from "luxon";

const api_key = "35cdcdc8ec84c26675897031c0f592bd";
const base_url = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(base_url + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: api_key });

  return fetch(url).then((res) => res.json());
};

const formattedCurrentWeather = (data) => {
    
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    wind: { speed },
    weather,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    details,
    icon,
    speed,
  };
};

const formattedForecastWeather = async (data) => {
  let { timezone, daily, hourly } = data;

  if (daily && daily.length > 1) {
    daily = daily.slice(1, 6).map((d) => ({
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
    }));
  }

  if (hourly && hourly.length > 1) {
    hourly = hourly.slice(1, 6).map((d) => ({
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
    }));
  }

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeatherData = await getWeatherData("weather", searchParams).then(formattedCurrentWeather);
    const { lat, lon } = formattedCurrentWeatherData;
    const formattedForecastWeatherData = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
}).then(formattedForecastWeather);

    return { ...formattedCurrentWeatherData, ...formattedForecastWeatherData };
};

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL YYYY | Local time: hh:mm a") => {
    if (typeof secs !== "number" || isNaN(secs)) {
    return ""; // Return an empty string or handle the invalid input accordingly
    }

    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

const iconURLFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export { formatToLocalTime, iconURLFromCode, getFormattedWeatherData };
