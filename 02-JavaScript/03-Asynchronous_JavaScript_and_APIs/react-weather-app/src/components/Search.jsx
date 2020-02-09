import React from 'react';
import PropTypes from 'prop-types';
import '../css/Search.css';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputFieldRef = React.createRef();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { fetchWeatherData } = this.props;
    const query = this.inputFieldRef.current.value;

    fetchWeatherData(query);
  }

  render() {
    return (
      <section className="search-section">
        <form className="search-box" onSubmit={this.onSubmit}>
          <input
            className="location input"
            ref={this.inputFieldRef}
            type="text"
            name="location"
            placeholder="Location"
          />
          <button className="search-button button" type="submit">Search</button>
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired,
};

export default Search;
