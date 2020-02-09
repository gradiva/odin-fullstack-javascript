import { types } from '../actions/weatherDataActions';

const status = {
  INITIAL: 'initial',
  FETCHING: 'fetching',
  OK: 'ok',
  ERROR: 'error',
};

const getInitialState = () => ({
  data: undefined,
  status: status.INITIAL,
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_DATA:
      return {
        ...state,
        data: undefined,
        status: status.FETCHING,
      };

    case types.FETCH_WEATHER_DATA_RESPONSE:
      return {
        ...state,
        data: action.data,
        status: action.data.cod === 200 ? status.OK : status.ERROR,
      };

    case types.FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        status: status.ERROR,
      };

    default: {
      return state;
    }
  }
};
