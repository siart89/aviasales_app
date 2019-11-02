import React from 'react';
import PropTypes from 'prop-types';
import TicketElement from './TicketElement';
import calcTimeFromTo from '../../actions/calcTimeFromTo';
import calcFlightTime from '../../actions/calcFlightTime';
import calcStops from '../../actions/calcStops';


const FlightInfo = ({ info }) => {
  const setDestination = () => (
    `${info.origin} - ${info.destination}`
  );
  return (
    <>
      <TicketElement
        titleText={setDestination()}
        infoText={calcTimeFromTo(info)}
      />
      <TicketElement
        titleText="В пути"
        infoText={calcFlightTime(info)}
      />
      <TicketElement
        titleText={calcStops(info)}
        infoText={info.stops.join(',')}
      />
    </>
  );
};

FlightInfo.propTypes = {
  info: PropTypes.shape({
    date: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    stops: PropTypes.array.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};
export default FlightInfo;
