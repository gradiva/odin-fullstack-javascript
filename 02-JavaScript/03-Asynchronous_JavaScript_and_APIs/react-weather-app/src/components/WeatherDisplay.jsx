import React from 'react';
import PropTypes from 'prop-types';
import '../css/WeatherDisplay.css';
import { kelvinToCelsius } from '../utils/temperature';
import { getWeatherIconUrl } from '../api';

class WeatherDisplay extends React.PureComponent {
  render() {
    const { data, status } = this.props;

    if (status === 'error' && data && data.message) {
      return <section className="display-section"><p className="text-message">{data.message}</p></section>;
    }

    if (status !== 'ok') return <section className="display-section" />;

    const location = data.name;
    const weatherDescription = data.weather[0].main;
    const temperature = Math.round(kelvinToCelsius(data.main.temp));
    const weatherIconId = data.weather[0].icon;

    return (
      <section className="display-section">
        <div className="weather-info text-info">
          <img src={getWeatherIconUrl(weatherIconId)} className="weather-icon" alt="" />
          <p className="weather-description">{weatherDescription}</p>
        </div>
        <div className="text-temperature temperature">{`${temperature}°C`}</div>
        <div className="text-location location">{location}</div>
      </section>
    );
  }
}

WeatherDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};

export default WeatherDisplay;
