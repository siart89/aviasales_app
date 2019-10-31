import React from 'react';
import PropTypes from 'prop-types';
import { TicketWrapper, Cost, Img } from './styles';
import FlightInfo from './FlightInfo';


const Ticket = ({ infoArr }) => {
  const url = `//pics.avs.io/99/36/${infoArr.carrier}.png`;

  const formatCost = (price) => {
    const cost = [...price.toString()];
    cost.splice((cost.length - 3), 0, ' ');
    return `${cost.join('')} P`;
  };

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
