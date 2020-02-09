import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import WeatherApp from './components/WeatherApp';
import { fetchWeatherData } from './actions/weatherDataActions';
import weatherApiMiddleware from './middleware/weatherApiMiddleware';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(weatherApiMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(fetchWeatherData('Stockholm'));
