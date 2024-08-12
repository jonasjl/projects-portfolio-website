import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../../Api/Api' ; // adjust the path to where your api.js file is located

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(59.93, 10.72, 90, '')
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
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
      {/* Display your data here. This is just a placeholder. */}
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

export default WeatherApp;
