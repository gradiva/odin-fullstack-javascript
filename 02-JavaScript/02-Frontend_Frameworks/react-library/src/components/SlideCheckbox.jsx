import React from 'react';
import PropTypes from 'prop-types';
import '../css/slidecheckbox.css';

class SlideCheckbox extends React.PureComponent {
  render() {
    const { id, name, checked, onChange } = this.props;

    return (
      <label className="switch" htmlFor={id}>
        <input
          type="checkbox"
          defaultChecked={checked}
          checked={checked}
          id={id}
          name={name}
          className="checkbox"
          onChange={onChange}
        />
        <div className="slider round" />
      </label>
    );
  }
}

SlideCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SlideCheckbox;
