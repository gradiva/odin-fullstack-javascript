const endpoint = 'http://api.openweathermap.org/data/2.5/weather';
const appId = 'aff2b592970a65abe4953650a6a956d7';

export const fetchWeatherData = (query) => {
  const params = {
    q: query,
    APPID: appId,
  };

  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  const url = `${endpoint}?${queryString}`;

  return fetch(url)
    .then((response) => response.json());
};

export const getWeatherIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;
