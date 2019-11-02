import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';
import {
  Label,
  CheckBox,
  LabelText,
} from '../styles';
import filterFromCheckBox from '../../store/actions/filterFromCheckBox';
import filterReducer from '../../store/reducers/filterReducer';


const RadioElement = ({ value, title, isCheked }) => {
  const dispatch = useDispatch(filterReducer);
  return (

    <Label
      htmlFor={`radio_${value}`}
      onClick={() => dispatch(filterFromCheckBox(value))}
    >
      <CheckBox isCheked={isCheked}>
        {isCheked && <Icon icon={check} size={14} style={{ color: '#2196F3' }} />}
      </CheckBox>
      <input
        type="radio"
        name="transferFilter"
        value={value}
        id={`radio_${value}`}
      />
      <LabelText>
        {title}
      </LabelText>

    </Label>

  );
};


RadioElement.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isCheked: PropTypes.bool.isRequired,
};

export default RadioElement;
