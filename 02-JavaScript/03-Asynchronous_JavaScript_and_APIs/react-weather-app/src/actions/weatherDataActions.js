export const types = {
  FETCH_WEATHER_DATA: 'FETCH_WEATHER_DATA',
  FETCH_WEATHER_DATA_RESPONSE: 'FETCH_WEATHER_DATA_RESPONSE',
  FETCH_WEATHER_DATA_ERROR: 'FETCH_WEATHER_DATA_ERROR',
};

export const fetchWeatherData = (query) => ({
  type: types.FETCH_WEATHER_DATA,
  query,
});

export const fetchWeatherDataResponse = (data) => ({
  type: types.FETCH_WEATHER_DATA_RESPONSE,
  data,
});

export const fetchWeatherDataError = (error) => ({
  type: types.FETCH_WEATHER_DATA_ERROR,
  error,
});
