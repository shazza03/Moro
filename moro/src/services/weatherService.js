// import { useEffect, useState } from "react";

// const params = {
//   latitude: 51.5085,
//   longitude: -0.1257,
//   hourly: ["temperature_2m", "precipitation_probability", "precipitation"],
//   forecast_days: 1,
// };
// const url = "https://api.open-meteo.com/v1/forecast";

// const weatherService = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(async() => {
//     try {
//       const response = await fetchWeatherApi(url, params);
//       const data = await response.json();
//       setWeather(data[0]);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
// };
