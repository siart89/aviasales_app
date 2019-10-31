import React from 'react';
import PropTypes from 'prop-types';
import { InnerBox, TitleText, InfoText } from './styles';

const TicketElement = ({ titleText, infoText }) => (

  <InnerBox>
    <TitleText>{titleText}</TitleText>
    <InfoText>{infoText}</InfoText>
  </InnerBox>
);

TicketElement.propTypes = {
  titleText: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};

export default TicketElement;
