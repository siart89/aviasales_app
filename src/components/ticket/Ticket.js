import React from 'react';
import PropTypes from 'prop-types';
import { TicketWrapper, Cost, Img } from './styles';
import FlightInfo from './FlightInfo';
import formatCost from '../../actions/formatCost';


const Ticket = ({ infoArr }) => {
  const url = `//pics.avs.io/99/36/${infoArr.carrier}.png`;

  return (
    <>
      <TicketWrapper>
        <Cost>
          {formatCost(infoArr.price)}
        </Cost>
        <Img src={url} alt={infoArr.carrier} />
        <FlightInfo info={infoArr.segments[0]} />
        <FlightInfo info={infoArr.segments[1]} />
      </TicketWrapper>
    </>
  );
};

Ticket.propTypes = {
  infoArr: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.array.isRequired,
  }).isRequired,
};

export default Ticket;
