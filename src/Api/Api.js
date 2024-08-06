// api.js
export async function fetchWeatherData(lat, lon, alt, sitename) {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=${alt}lat=${lat}&lon=${lon}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': sitename
        }
    });
    const data = await response.json();
    return data;
}
