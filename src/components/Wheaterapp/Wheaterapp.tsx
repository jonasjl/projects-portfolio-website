import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../../Api/Api' ; // adjust the path to where your api.js file is located

interface WeatherDetails {
    air_pressure_at_sea_level: number;
    air_temperature: number;
    wind_speed: number;
    ultraviolet_index_clear_sky: number;
    // Add other properties as needed...
  }
  
  interface TimeSeries {
    time: string;
    data: {
      instant: {
        details: WeatherDetails;
      };
      // Add other properties as needed...
    };
  }
  
  interface WeatherData {
    type: string;
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      meta: {
        updated_at: string;
        units: Record<string, string>;
      };
      timeseries: TimeSeries[];
    };
  }
  
  

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(59.93, 10.72, 90, 'https://github.com/jonasjl/projects-portfolio-website')
      .then(data => {
        console.log(data); // log the fetched data
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error); // log any errors
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Weather Data:</h2>
      {weatherData && weatherData.properties && weatherData.properties.timeseries ? (
        <>
          <p>Temperature: {weatherData.properties.timeseries[0].data.instant.details.air_temperature}°C</p>
          <p>UV: {weatherData.properties.timeseries[0].data.instant.details.ultraviolet_index_clear_sky}</p>
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
  
};

export default WeatherApp;
