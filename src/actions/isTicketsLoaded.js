import React from 'react';
import ErrorPage from '../components/support/Error';

const isTicketsLoaded = (arr, iniq, Ticket) => {
  if (arr === 'ERROR') {
    return (
      <ErrorPage />
    );
  }
  return (
    arr.tickets.map((item, ind) => {
      const key = iniq();
      while (ind <= 5) {
        return <Ticket key={key} infoArr={item} />;
      } return null;
    })
  );
};

export default isTicketsLoaded;
