import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';
import {
  Label,
  CheckBox,
  LabelText,
} from '../styles';


const RadioElement = ({ value, title, isCheked }) => (

  <Label htmlFor={value}>
    <CheckBox isCheked={isCheked}>
      {isCheked && <Icon icon={check} size={14} style={{ color: '#2196F3' }} />}
    </CheckBox>
    <input
      type="radio"
      name="transferFilter"
      value={value}
      id={value}
    />
    <LabelText>
      {title}
    </LabelText>

  </Label>

);

RadioElement.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCheked: PropTypes.bool.isRequired,
};

export default RadioElement;
