import { types as weatherDataActions, fetchWeatherDataResponse, fetchWeatherDataError } from '../actions/weatherDataActions';
import { fetchWeatherData } from '../api';

const weatherApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case weatherDataActions.FETCH_WEATHER_DATA:
      fetchWeatherData(action.query)
        .then((data) => {
          store.dispatch(fetchWeatherDataResponse(data));
        })
        .catch((error) => {
          store.dispatch(fetchWeatherDataError(error));
        });

      break;

    default:
    // Do nothing
  }

  next(action);
};

export default weatherApiMiddleware;
