import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../styles';

const CheckButton = (
  {
    title,
    value,
    handleOnClick,
    check,
    ind,
  },
) => (
  <Button
    onClick={() => handleOnClick(value)}
    check={check}
    position={ind === 0 && 'LEFT'}
  >
    {title}
  </Button>
);

CheckButton.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
  ind: PropTypes.number.isRequired,
};

export default CheckButton;
