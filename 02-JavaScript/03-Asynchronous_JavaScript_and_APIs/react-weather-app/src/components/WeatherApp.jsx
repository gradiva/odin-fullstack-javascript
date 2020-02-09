import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import WeatherDisplayContainer from '../containers/WeatherDisplayContainer';
import '../css/WeatherApp.css';

export default class WeatherApp extends React.PureComponent {
  render() {
    return (
      <main className="main">
        <SearchContainer />
        <WeatherDisplayContainer />
      </main>
    );
  }
}

// const WeatherApp = ({ data }) => (
//   <main className="main">
//     <SearchContainer className="search-section" />
//     {/* <WeatherDisplay className="weather-display" /> */}
//   </main>
// );

// export default WeatherApp;
