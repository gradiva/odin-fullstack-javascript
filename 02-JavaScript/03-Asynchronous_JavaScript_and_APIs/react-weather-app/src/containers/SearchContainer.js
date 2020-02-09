import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchWeatherData } from '../actions/weatherDataActions';

const mapDispatchToProps = {
  fetchWeatherData,
};

export default connect(undefined, mapDispatchToProps)(Search);
