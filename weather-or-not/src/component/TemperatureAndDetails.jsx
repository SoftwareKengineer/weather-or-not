import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';

import { iconURLFromCode, formatToLocalTime } from './services/weatherservice';

function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
          <img src={iconURLFromCode(icon)} alt="" className="w-20" />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Windspeed:
            <span className="font-medium ml-1">{`${speed.toFixed()}mph`}</span>
          </div>
        </div>

{/* second Div after humidity and wind on app under them both */}

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
          <UilSun />
          <p className="font-light">
            Rise: <span>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
          </p>

          <UilSunset />
          <p className="font-light">
            Set: <span>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
          </p>

          <UilSun />
          <p className="font-light">
            High: <span>{`${temp_max.toFixed()}°`}</span>
          </p>

          <UilSun />
          <p className="font-light">
            Low: <span>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TempAndDetails;
