import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

class Button extends React.PureComponent {
  render() {
    const { onClick, value } = this.props;

    return (
      <button
        className="button"
        type="button"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
