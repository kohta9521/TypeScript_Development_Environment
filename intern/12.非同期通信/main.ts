// recieveWeatherIngo関数をimport
// import { recieveWeatherIngo } from "./weatheringo-reciever";

const weatheringoUrl = "https://api.openweathermap.org/data/3.0/weather";
const params: {
  lang: string,
  q: string,
  appId: string,
} =
{
  lang: "ja",
  q: "Tokyo",
  appId: "f3242ee5ec07b2a1bd85068fee430ddb",
}

const queryParams = new URLSearchParams(params);
const urlFull = `${weatheringoUrl}?${queryParams}`;
// recieveWeatherIngo(urlFull);