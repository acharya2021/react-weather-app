import axios from 'axios';

const API_KEY = "af6e9539f8722e28fd6ebb1a5ac73950";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// use a variable for the string to make imports consistent
export const FETCH_WEATHER = "FETCH_WEATHER";

// create the action creator fetchWeather
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // take the url and make an asynchronous get request on it.
    // Returns a promise
    const request = axios.get(url);

    // This is the Action, an object that always has a type
    return {
        type: FETCH_WEATHER,
        // Assign the Promise to the payload key
        // The middleware redux-promise unwraps the promise into relevant data
        // this data is then sent to the reducers
        payload: request
    };
}
