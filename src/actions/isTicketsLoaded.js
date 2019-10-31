import React from 'react';

const isTicketsLoaded = (arr, iniq, Ticket) => {
  if (arr === 'ERROR') {
    return (
      <div>
        Ups Sorry if you refresh this page we will getting new tickets for you
      </div>
    );
  }
  return (
    arr.tickets.map((item, ind) => {
      const key = iniq();
      while (ind <= 5) {
        return <Ticket key={key} infoArr={item} />
      } return null;
    })
  );
};

export default isTicketsLoaded;
