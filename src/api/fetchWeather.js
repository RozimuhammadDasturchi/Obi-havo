import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "fed5e9c6e859b61b6d313f4beb567c3a";

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}
