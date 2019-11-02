import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../styles';
import filterFromButton from '../../store/actions/filterFromButton';

const CheckButton = (
  {
    title,
    value,
    handleOnClick,
    check,
    ind,
  },
) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        handleOnClick(value);
        dispatch(filterFromButton(value));
      }}
      check={check}
      position={ind === 0 && 'LEFT'}
    >
      {title}
    </Button>
  );
};


CheckButton.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
  ind: PropTypes.number.isRequired,
};

export default CheckButton;
