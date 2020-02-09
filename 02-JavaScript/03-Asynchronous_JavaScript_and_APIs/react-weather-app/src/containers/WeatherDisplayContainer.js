import { connect } from 'react-redux';
import WeatherDisplay from '../components/WeatherDisplay';

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
  status: state.weatherData.status,
});

export default connect(mapStateToProps)(WeatherDisplay);
