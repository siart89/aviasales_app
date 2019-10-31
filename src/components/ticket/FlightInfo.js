import React from 'react';
import PropTypes from 'prop-types';
import TicketElement from './TicketElement';


const FlightInfo = ({ info }) => {
  const calcTimeFromTo = () => {
    const depart = new Date(info.date);
    const arrivel = new Date(depart.getTime() + info.duration * 60 * 1000);
    const formatingTime = (time) => {
      if (time < 10) return `0${time}`;
      return time;
    };

    const departH = formatingTime(depart.getHours());
    const departM = formatingTime(depart.getMinutes());
    const arrivelH = formatingTime(arrivel.getHours());
    const arrivelM = formatingTime(arrivel.getMinutes());

    return `${departH}:${departM} - ${arrivelH}:${arrivelM}`;
  };

  const setDestination = () => (
    `${info.origin} - ${info.destination}`
  );

  const calcFlightTime = () => {
    let hours = Math.floor(info.duration / 60);
    let minutes = info.duration - hours * 60;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    return `${hours}ч ${minutes}м`;
  };

  const calcStops = () => {
    let text = 'Пересадка';
    if (info.stops.length === 0) {
      return 'Без пересадок';
    }
    if (info.stops.length >= 2 && info.stops.length <= 4) {
      text = 'Пересадки';
    }
    if (info.stops.length >= 5 && info.stops.length <= 20) {
      text = 'Пересадок';
    }
    return `${info.stops.length} ${text}`;
  };
  return (
    <>
      <TicketElement
        titleText={setDestination()}
        infoText={calcTimeFromTo()}
      />
      <TicketElement
        titleText="В пути"
        infoText={calcFlightTime()}
      />
      <TicketElement
        titleText={calcStops()}
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
